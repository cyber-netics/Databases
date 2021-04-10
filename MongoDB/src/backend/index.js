const mongoose = require("mongoose");
const fs = require("fs");

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});
const Userchema = mongoose.model("User", User);

//
var key = fs.readFileSync("./ssl/mongodb.pem");
var ca = [fs.readFileSync("./ssl/rootCA.pem")];

const test = async () => {
  mongoose.connect(
    "mongodb://root:example@mongodb:27017/mongodb?authSource=admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      sslValidate: true,
      sslCA: ca,
      sslKey: key,
      sslCert: key,
      user: "root",
      pass: "example",
    }
  );

  console.log("testing.....");

  await Userchema.create({
    name: "hellooo",
  });

  let data = await Userchema.find();
  console.log("testing....", data);
};

test();
