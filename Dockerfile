# base image (latest)
FROM node:latest AS build-deps
# set working directory
WORKDIR /usr/src/app
# install and cache app dependencies
COPY package.json package-lock.json angular.json ./
# update NPM and update all packages
RUN npm i npm@latest -g && npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
# CD
WORKDIR /ng-app
# copy to
COPY . .
#build production deployment
RUN $(npm bin)/ng build --prod --build-optimizer

FROM nginx:latest

COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]