FROM node:14

ENV MONGODB_URI=mongodb://mongodb-gen:27017/hikerrr

WORKDIR /app

COPY nodemon.json ./

COPY package*.json ./

RUN npm install

COPY ./public ./public
COPY ./client ./client
COPY ./views ./views
COPY ./src ./src

RUN npm run watch:dev
