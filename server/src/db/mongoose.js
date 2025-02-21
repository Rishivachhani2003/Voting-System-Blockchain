const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb://localhost:27017/elections',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})