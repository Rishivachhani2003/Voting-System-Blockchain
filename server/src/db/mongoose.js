// const mongoose = require('mongoose')

// const conn = mongoose.connect('mongodb://localhost:27017/elections',{
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// })

require("dotenv").config();
const mongoose = require("mongoose");

const conn = mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
