FROM docker.io/node:alpine

WORKDIR /app

COPY ./server.js .

USER 1000

CMD ["node", "server.js"]