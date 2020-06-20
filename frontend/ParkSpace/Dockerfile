# stage build
FROM node:lts as build
WORKDIR /usr/src/app
COPY . ./
RUN npm ci
RUN ./node_modules/.bin/ng build --prod --source-map=false
# stage deploy
FROM nginx:alpine
EXPOSE 80
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/ParkSpace/ /usr/share/nginx/html
RUN chown -R nginx /etc/nginx /run
RUN chmod -R a+w /run /var/cache /var/cache/nginx
