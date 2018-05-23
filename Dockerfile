# base image (latest)
FROM node as dev
# install dependancies
#COMMAND
RUN echo 'LATEST BUILD'
#
RUN git clone https://github.com/kavikat/feedGordon.git \
    && cd feedGordon \
    && npm update -g \
    && npm install \
    && npm install -g @angular/cli
#set dir
WORKDIR feedGordon
# production build
RUN ng build --prod --build-optimizer
# new prod server container
FROM nginx:alpine as prod
COPY --from=dev /feedGordon/dist/feedGordon /usr/share/nginx/html
# open port
EXPOSE 8080
