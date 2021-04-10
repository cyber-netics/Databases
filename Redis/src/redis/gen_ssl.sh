openssl genrsa -out key.pem 4096
openssl req -new -x509 -key key.pem -out cert.pem -days 360 -batch

cat key.pem cert.pem > private.pem
chmod 640 key.pem cert.pem private.pem