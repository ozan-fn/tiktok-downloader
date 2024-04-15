FROM node
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build
RUN cd api && npm i
EXPOSE 3000
CMD npm start