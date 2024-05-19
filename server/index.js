const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const cors = require('cors')


dotenv.config();
const port = 3000;
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD']
}));
// app.useCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000"))

// app.use(function (req, res, next) {

//     res.header("Access-Control-Allow-Origin", "*");

//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD");

//     next();

//  })


mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MONGO")).catch((err)=>{console.log(err)});

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})