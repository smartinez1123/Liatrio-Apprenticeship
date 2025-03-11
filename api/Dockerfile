FROM node:18-alpine

# Working Directory inside the container
WORKDIR /app

# copy package.json and package-lock.json first
COPY package*.json ./

# Install's dependencies
RUN npm install --omit=dev

# copies the rest of the application files
COPY . .

# the port that the application will run on
EXPOSE 3000

# commands to run the application
CMD ["node", "server.js"]
