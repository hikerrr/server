# build stage
FROM node:14-alpine AS build

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

# production stage
FROM node:14-alpine AS production

WORKDIR /app

COPY ./package*.json ./

RUN npm install --only=production

COPY ./public ./public

COPY ./views ./views

COPY --from=build /app/dist ./dist

EXPOSE 80

CMD [ "node", "./dist/bin/www.js" ]