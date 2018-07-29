FROM node:9.11.2-alpine
WORKDIR /usr/src/app
COPY tslint.json .
COPY *config* ./
COPY .postcssrc.js .
EXPOSE 8080
COPY package*.json ./
RUN npm install
COPY ./public ./public
COPY ./tests ./tests
COPY ./src ./src
CMD ["npm","run","serve"]

