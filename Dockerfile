FROM nginx

RUN rm /usr/share/nginx/html/index.html && mkdir /usr/share/nginx/html/assets

ADD ./dist/cv/browser /usr/share/nginx/html
RUN chown nginx:nginx /usr/share/nginx/html/*
