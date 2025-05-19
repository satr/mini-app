FROM node:18

WORKDIR /app

COPY package.json ./
RUN npm install
RUN date
COPY . .

EXPOSE 8080

USER 1000
CMD ["node", "server.js"]
