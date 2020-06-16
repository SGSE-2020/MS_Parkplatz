FROM node:lts
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 8080 50051
RUN npm ci
CMD ["npm", "start"]
