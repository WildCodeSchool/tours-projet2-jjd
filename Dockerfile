# build
FROM node:10.15.3
WORKDIR /workdir
COPY . /workdir
RUN yarn install
RUN yarn build

# run
FROM nginx:1.14.2
RUN sed -i 's|index  index.html index.htm;|index  index.html index.htm;\ntry_files \$uri \$uri/ /index.html;|' /etc/nginx/conf.d/default.conf
COPY --from=0 /workdir/dist/ /usr/share/nginx/html
