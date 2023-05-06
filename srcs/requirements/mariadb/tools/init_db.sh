#!/bin/bash

sed -i 's/^bind-address\s*=.*/bind-address = 0.0.0.0/' /etc/mysql/mariadb.conf.d/50-server.cnf

service mysql start

mysql -u root -h localhost -e "CREATE DATABASE IF NOT EXISTS $MYSQL_DATABASE;"
mysql -u root -h localhost -e "CREATE USER IF NOT EXISTS '$MYSQL_USER'@'%' IDENTIFIED BY '$MYSQL_PASSWORD';"
mysql -u root -h localhost -e "GRANT ALL PRIVILEGES ON $MYSQL_DATABASE.* TO '$MYSQL_USER'@'%';"
mysql -u root -h localhost -e "FLUSH PRIVILEGES;"

service mysql stop

mysqld