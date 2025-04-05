# Use official Node 16 base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server to serve the static files (optional but recommended for production)
# You can use serve or nginx, but here we use serve
RUN npm install -g serve

# Expose port 3000 (React default)
EXPOSE 3000

# Command to serve the built app
CMD ["serve", "-s", "build", "-l", "3000"]

# FROM node:16

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy source code
# COPY . .

# # Build React app
# RUN npm run build

# # Expose port 3000
# EXPOSE 3000

# # Start server
# CMD ["npm", "start"]
