FROM php:8.1-apache

# Install PHP extensions & enable Apache rewrite
RUN apt-get update && apt-get install -y libzip-dev unzip \
    && docker-php-ext-install mysqli pdo pdo_mysql \
    && a2enmod rewrite

# Copy PHP config
COPY php.ini /usr/local/etc/php/php.ini
