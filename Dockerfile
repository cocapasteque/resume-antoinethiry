FROM nginx

RUN rm /usr/share/nginx/html/index.html && mkdir /usr/share/nginx/html/assets
RUN chown nginx:nginx /usr/share/nginx/html/*

ADD ./dist/cv /usr/share/nginx/html