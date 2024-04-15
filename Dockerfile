FROM node
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
RUN cd api && npm i
CMD npm start