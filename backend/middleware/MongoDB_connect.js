const mongoose = require('mongoose');
require('dotenv').config();

const url =  process.env.MongoDB_url ||'mongodb://localhost:27017/';


mongoose.connect(url)
.then(() => console.log('Connected to MongoDB...'))
.catch((err)=>{console.log(err)})

