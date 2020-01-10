#base image 

FROM node:10

# Create app directory
RUN mkdir -p /usr/app/frontend
WORKDIR /usr/app/frontend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .


# Specify port app runs on
EXPOSE 3000


CMD [ "npm", "start" ]