const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Baljot:<password>@kind-hearted.abcf9rw.mongodb.net/shop?retryWrites=true&w=majority"
);

app.listen(5000, () => {
  console.log("Backend server is running!");
});
