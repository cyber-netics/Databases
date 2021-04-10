const redis = require("redis");
var fs = require("fs");

// var ssl = {
//   key: fs.readFileSync("./certs/key.pem", (encoding = "ascii")),
//   cert: fs.readFileSync("./certs/private.pem", (encoding = "ascii")),
//   // ca: [ fs.readFileSync('./certs/private.pem', encoding='ascii') ],
//   rejectUnauthorized: false,
// };

var client = redis.createClient({
  host: "0.0.0.0",
  port: 6379,
  password: "vacho123344vacho",
  // tls: ssl,
});

client.on("error", (error) => {
  console.error(error);
});

client.set("key", "value....");
client.get("key", redis.print);

// 172.18.0.1

// openssl genrsa -out key.pem 2048
// openssl req -new -key key.pem -out key.csr

// RUN stunnel /stunnel.conf
// CMD ["redis-server", "--protectd-mode on"]

// docker cp 6f6372508328:/text.txt /Users/eduardjacobs/Desktop/test3
// docker cp 7def41dd2e32:/key.pem /Users/eduardjacobs/Desktop/test3

// docker build -t myapp .
// docker run -v "$(pwd)/download:/data" -p "6379:6379" myapp

//SSH
// docker run -it myapp sh

//Copy file
// rm -f certs
// mkdir certs
// docker cp 22b7c27e3a6a:/private.pem ./certs
// docker cp 7c73697e13e4:/key.pem ./certs
// docker cp 7c73697e13e4:/cert.pem ./certs
