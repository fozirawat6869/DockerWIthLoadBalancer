# Use Node image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all code
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["npm", "run","dev"]