# Use official Node.js 16 base image
FROM node:16

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose the server port
EXPOSE 8000

# Start the server with nodemon
CMD ["npm", "run", "dev"]
