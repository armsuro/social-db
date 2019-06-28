FROM mhart/alpine-node

USER root

# Update
RUN apk add --update nodejs git g++ gcc libgcc libstdc++ make python

WORKDIR /src

# Bundle app source
COPY . .

RUN npm install

CMD ["npm", "run", "clean"]
