FROM node:24-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . . 
EXPOSE 1994
CMD ["npm", "run", "start"]

