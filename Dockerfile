# base image (latest)
FROM node as dev
# set working directory
RUN mkdir app
WORKDIR   /app
# install and cache app dependencies
COPY . /app/
# update NPM and update all packages
RUN npm update -g \
    && npm install \
    && npm install -g @angular/cli

# production build
RUN ng build --prod --build-optimizer
# new prod server container
FROM alpine:3.7 as prod
# add app
COPY --from=dev /app/dist /var/www/localhost/
# start app
EXPOSE 8080
