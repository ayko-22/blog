# Use Bun's official image
FROM oven/bun:latest

# Set working directory
WORKDIR /app

# Copy package files first for efficient Docker caching
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the app
COPY . .

# Expose Vite's default port
EXPOSE 3001

# Start the Vite React development server
CMD ["bun", "run", "dev"]