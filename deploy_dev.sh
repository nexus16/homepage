#!/bin/sh

gulp build
rm hblab.zip
zip -r hblab.zip dist
scp hblab.zip hblab1:/var/www/html/
ssh hblab1 unzip /var/www/html/hblab.zip -d /var/www/html/
ssh hblab1 rm -rf /var/www/html/company_homepage
ssh hblab1 mv /var/www/html/dist /var/www/html/company_homepage
ssh hblab1 rm /var/www/html/hblab.zip
ssh hblab1 sudo service httpd reload