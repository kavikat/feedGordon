# base image (latest)
FROM node as dev
# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/local/lib/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /app
# update NPM and update all packages
RUN npm update -g \
    npm install \
    && npm install -g @angular/cli@1.7.1 --unsafe
# add to path
# production build
RUN ng build --prod --build-optimizer
# new prod server container
FROM alpine:3.7
# add app
COPY --from=dev /app/dist /var/www/localhost/
# start app
EXPOSE 8080
