FROM ubuntu:latest
MAINTAINER limtaegeun <imori333@gmail.com>

RUN apt-get update
RUN apt-get install -y nginx
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf

# Define mountable directories.
VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/certs", "/etc/nginx/conf.d", "/var/log/nginx", "/var/www/html"]

ENV PROXY_PASS localhost:3000
ENV PROXY_PASS1 localhost:3001
ENV PROXY_PASS2 localhost:3002

ENV SERVER_NAME myserver.com
ENV PEM_PATH /etc/nginx/certs/cert.pem
ENV KEY_PATH /etc/nginx/certs/cert.key

WORKDIR /etc/nginx

ADD ./sites-available/ssl /etc/nginx/sites-available/ssl
ADD ./docker-entrypoint.sh /etc/nginx/docker-entrypoint.sh
RUN chmod 777 /etc/nginx/docker-entrypoint.sh
EXPOSE 80 443 5001 5000 5002 3000 3001 3002
ENTRYPOINT ["/etc/nginx/docker-entrypoint.sh"]
CMD ["nginx"]
