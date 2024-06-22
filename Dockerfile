FROM node:18-alpine

WORKDIR /nutai-client

COPY public/ /nutai-client/public
COPY src/ /nutai-client/src
COPY package.json /nutai-client/
COPY . .

RUN npm install

CMD ["npm", "start"]

EXPOSE 3000