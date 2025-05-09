# Use an official Node.js image as the base
FROM node:23.2.0-alpine  AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the application files
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
# Build the Next.js application
RUN pnpm run build

# Expose the port that the application will run on (default Next.js port)
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "start"]
