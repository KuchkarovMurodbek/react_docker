FROM node:18.16.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY  . .

RUN npm run build
EXPOSE 5173

CMD ["npm", "run", "dev"]