#!bin/bash

mkdir -p /var/run/vsftpd && mkdir -p /var/run/vsftpd/empty

adduser $FTP_USER --disabled-password --gecos ""

echo "$FTP_USER:$FTP_PASSWORD" | chpasswd

chown $FTP_USER:$FTP_USER /content

echo "$FTP_USER" >> /etc/vsftpd.userlist

vsftpd /etc/vsftpd.conf