# Use an official Node.js image as the base
FROM node:23.2.0-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN pnpm run build

# Expose the port that the application will run on (default Next.js port)
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "start"]
