

# Use the official Node.js image as the base
FROM node:20.11-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install ALL dependencies (including devDependencies) for build
RUN npm install

# Copy the entire project
COPY . .

# Build the Vite React app
RUN npm run build

# Clean up dev dependencies
RUN npm prune --production

# Install serve to run the built app
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5002

# Start the app using serve
CMD ["serve", "-s", "dist", "-l", "5001"]