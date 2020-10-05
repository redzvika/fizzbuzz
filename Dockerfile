FROM node:10.22.1-alpine3.9

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/node_docker/

WORKDIR $HOME/node_docker

RUN npm install --silent --progress=false

COPY /src  $HOME/node_docker

CMD ["npm", "start"]