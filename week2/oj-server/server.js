const express = require('express')
const app = express()
var restRouter = require("./routes/rest");
var mongoose = require("mongoose");

mongoose.connect("mongodb://user:user123@ds137651.mlab.com:37651/cs503coj");

app.use("/api/v1", restRouter);

app.listen(3000, () => console.log('App listening on port 3000!'))
