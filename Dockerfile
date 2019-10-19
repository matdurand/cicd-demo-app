FROM node:lts-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:lts-alpine as runtime
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=build  /usr/src/app/dist/* ./
CMD [ "node", "index.js" ]
EXPOSE 3000
