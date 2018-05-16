# base image (latest)
FROM node

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json

# update NPM and update all packages
RUN npm update -g
RUN npm install -g live-server
RUN npm install
RUN npm install -g @angular/cli@1.7.1 --unsafe

# run script to watch host dir for changea
CMD [ "live-server"] 

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 0.0.0.0