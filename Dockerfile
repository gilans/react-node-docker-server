FROM node:8.7.0-alpine
WORKDIR /api
COPY package*.json /api/
RUN npm install
COPY . /api/
CMD ["npm", "start"]
