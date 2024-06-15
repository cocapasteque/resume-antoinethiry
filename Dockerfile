FROM nginx

RUN rm /usr/share/nginx/html/index.html && mkdir /usr/share/nginx/html/assets
ADD ./dist/cv /usr/share/nginx/html
