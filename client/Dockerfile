FROM node:8.7.0-alpine
WORKDIR /client
COPY package*.json /client/
RUN npm install
COPY . /client/
CMD ["npm", "start"]