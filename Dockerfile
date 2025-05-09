# syntax=docker/dockerfile:1

ARG NODE_VERSION=23.2.0
ARG PNPM_VERSION=9.13.0

################################################################################
FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

# Install pnpm globally
RUN npm install -g pnpm@${PNPM_VERSION}

################################################################################
FROM base as deps

# Copy only the files needed for installing dependencies
COPY package.json pnpm-lock.yaml ./

# Install production dependencies
RUN pnpm install --prod --frozen-lockfile

################################################################################
FROM deps as build

# Copy the rest of the source code
COPY . .

# Install full dependencies including devDependencies
RUN pnpm install --frozen-lockfile

# Build the app
RUN pnpm run build

################################################################################
FROM base as final

ENV NODE_ENV=production

USER node

COPY package.json ./
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next

EXPOSE 3000

CMD pnpm start
