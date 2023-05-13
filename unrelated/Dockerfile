FROM nginx:stable-alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/nginx-default.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY src/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
