FROM alpine/git as clone
WORKDIR /app
RUN git clone https://github.com/luiscajl/VideoTranscoding-Frontend.git

FROM node:carbon
WORKDIR /usr/src/app
COPY --from=clone /app/VideoTranscoding-Frontend .
RUN npm install
RUN npm run build:ssr
EXPOSE 4000
CMD [ "npm", "run","serve:ssr" ]
