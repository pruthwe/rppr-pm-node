FROM node:18-alpine AS base
COPY ["package.json", "package-lock.json*", "./"]
WORKDIR /app

FROM base as builder
RUN npm install
COPY . .
RUN npm run build
RUN npm run test

FROM base as prod
ENV NODE_ENV=production
RUN npm install --production
COPY --from=builder /app/dist .
EXPOSE 3000
CMD [ "node", "main.js" ]