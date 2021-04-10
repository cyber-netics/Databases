
## Create Certificates for MongoDB
### RootCA.pem
```
openssl genrsa -out rootCA.key 2048
```

```
openssl genrsa -des3 -out rootCA.key 2048
```

```
openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem
```

### Mongodb.pem
```
openssl genrsa -out mongodb.key 2048
```

```
openssl req -new -key mongodb.key -out mongodb.csr
```

```
openssl x509 -req -in mongodb.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out mongodb.crt -days 500 -sha256
```

```
cat mongodb.key mongodb.crt > mongodb.pem
```