FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 8080
EXPOSE 50051
RUN npm ci
CMD ["npm", "start"]
