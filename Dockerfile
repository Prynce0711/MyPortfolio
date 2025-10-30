# Stage 1: Build app (Vite)
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package manifests first (for better layer caching)
COPY package*.json ./

# Install dependencies. Prefer npm ci when lockfile exists for reproducible builds.
RUN sh -c "if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi"

# Copy the rest of the source
COPY . .

# Build the app (Vite outputs to /dist)
RUN npm run build

# Stage 2: Serve app with Nginx
FROM nginx:alpine

# Copy a custom nginx config to enable SPA fallback and caching for assets
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy build output from builder (Vite uses /dist)
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
