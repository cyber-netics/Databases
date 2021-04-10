#!/bin/bash

country="US"
state="CA"
city="LA"
organiz="EJ"
industry="IT"
url="example.com"

keyfile="key"
client="cert"

# DIR
mkdir ssl

# Gen $keyfile certs
openssl genrsa -out ./ssl/$keyfile.key 2048
openssl genrsa -des3 -out ./ssl/$keyfile.key 2048
openssl req -x509 -new -nodes -key ./ssl/$keyfile.key -sha256 -days 1024 -out ./ssl/$keyfile.pem -subj "/C=$country/ST=$state/L=$city/O=$organiz Secure Company/OU=$industry Department/CN=$url"

# Gen $client certs
openssl genrsa -out ./ssl/$client.key 2048
openssl req -new -key ./ssl/$client.key -out ./ssl/$client.csr -subj "/C=$country/ST=$state/L=$city/O=$organiz Secure Company/OU=$industry Department/CN=$url"

openssl x509 -req -in ./ssl/$client.csr -CA ./ssl/$keyfile.pem -CAkey ./ssl/$keyfile.key -CAcreateserial -out ./ssl/$client.crt -days 500 -sha256 
cat ./ssl/$client.key ./ssl/$client.crt > ./ssl/$client.pem

# Post build
rm .srl