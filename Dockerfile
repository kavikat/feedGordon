# base image (latest)
FROM node as dev
# set working directory
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
#FROM alpine:3.7 as prod
# add app
#COPY --from=dev /app/dist /var/www/localhost/
# start app
#EXPOSE 8080
