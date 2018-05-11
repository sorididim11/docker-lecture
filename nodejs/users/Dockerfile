
FROM node:latest
RUN mkdir -p /usr/node/userservice

WORKDIR /usr/node/userservice
COPY package.json /usr/node/userservice
RUN npm install

COPY . /usr/node/userservice
EXPOSE 8888

CMD ["node", "app.js"]


