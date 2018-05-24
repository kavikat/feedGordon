# MongoDB & Docker Services
## Intro
I am building a DAMN (Docker, Angular, Mongo, Node) stack app. The app is distributed across a cluster of swarm services.

## Stack
* Docker (Swarm)
* Angular (4)
* mongoDB (Docker Mongo image)
* Node.js (Docker Node Image)

## Considerations
What is the best way to insert documents into the mongo container ?
		1. Can this be specified in the compose file?
		2. Should we reconsider architecture and create another container to act as an API endpoint? 
		3.  

## Implementation

```YAML
version: '3'
services:
  myservice:
    build:
      context: ./
      dockerfile: Dockerfile
    ports:
    - "8080:8080"
    depends_on:
    - mongo
  mongo:
    image: mongo
    ports:
    - "27017:27017"
```docker-compose.yml



## Result