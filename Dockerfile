# base image (latest)
FROM node:latest AS build-deps
# set working directory
WORKDIR /usr/src/app
# install and cache app dependencies
COPY package.json package-lock.json ./
# update NPM and update all packages
RUN npm update -g
RUN npm install
RUN npm install -g @angular/cli
#build production deployment
RUN ng build --prod --build-optimizer

FROM nginx:latest
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]