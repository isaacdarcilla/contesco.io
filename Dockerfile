FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY package.lock ./

RUN npm install --ignore-scripts

COPY . .

RUN npm build

EXPOSE 3000

CMD ["npm", "start"]
