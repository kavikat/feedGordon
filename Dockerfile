# base image (latest)
FROM node as dev
# set working directory
RUN mkdir app
WORKDIR /app
# install and cache app dependencies
COPY package.json /app
# update NPM and update all packages
RUN npm update -g \
    && npm install -g @angular/cli@1.7.1 --unsafe
# production build
RUN ng build --prod --build-optimizer
# new prod server container
FROM alpine:3.7
# add app
COPY --from=dev /app/dist /var/www/localhost/
# start app
EXPOSE 8080
