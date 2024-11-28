FROM docker.io/node:alpine

WORKDIR /app

COPY ./server.js .

CMD ["node", "server.js"]