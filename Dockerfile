ARG NODE_VERSION="18.20.4-alpine"


# First stage
FROM node:${NODE_VERSION} AS build-stage

WORKDIR /app
COPY . .
RUN npm install

# RUN yarn install --production
EXPOSE 8080
CMD  node index.js