############################################
#   BASE
############################################

ARG NODE_VERSION=14.15.0
FROM node:${NODE_VERSION}-alpine as base

# Available only during the build ~ not the final image
ARG BUILD_ID=UNAVAILABLE
ARG GIT_SHA=UNAVAILABLE
ARG CLIENT_PORT=3333

LABEL com.mattscholta.nodeversion="${NODE_VERSION}-alpine" \
  org.opencontainers.image.authors="Matthew Scholta ~ matthew.scholta@gmail.com" \
  org.opencontainers.image.build=$BUILD_ID \
  org.opencontainers.image.licenses="PROPRIETARY" \
  org.opencontainers.image.revision=$GIT_SHA \
  org.opencontainers.image.title="2021 Web Application | mattscholta.com"

EXPOSE ${CLIENT_PORT}
WORKDIR /app
COPY package*.json ./


############################################
#   BUILDER
############################################

FROM base as builder

RUN npm install

ENV NODE_ENV=production
ENV PATH /app/node_modules/.bin:$PATH
ENV CLIENT_PORT=${CLIENT_PORT}


############################################
#   CORE = BASE + SOURCE CODE
############################################

FROM builder as core
COPY . .


############################################
#   DEVELOPMENT
############################################

FROM core as development
ENV NODE_ENV=development

# Build it
# RUN npm build

# CMD ["npm", "--inspect=0.0.0.0:9229", "run", "start:dev"]
CMD ["npm", "run", "start:docker"]
