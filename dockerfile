
FROM node AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/iicorps/browser /usr/share/nginx/html