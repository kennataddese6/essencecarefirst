# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder  

# Set working directory
WORKDIR /app

# Install dependencies
# package-lock.json removed this
COPY package.json pnpm-lock.yaml ./ 
RUN pnpm ci

# Copy rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Runtime container
FROM node:20-alpine AS runner

# Set working directory
WORKDIR /app

# Copy only necessary runtime files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Optional: include env files if you're using them
# COPY .env.production ./

# Expose Next.js port
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
