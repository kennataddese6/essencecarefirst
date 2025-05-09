# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies with pnpm
RUN pnpm install --frozen-lockfile

# Copy rest of the application
COPY . .

# Build the Next.js app
RUN pnpm run build

# Stage 2: Runtime container
FROM node:20-alpine AS runner

# Install pnpm (needed to run the app)
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy necessary runtime files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose Next.js port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
