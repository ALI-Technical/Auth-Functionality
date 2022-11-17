const express = require('express');
const cors = require('cors');
const Login = require('./Controllers/Login');
const Signup = require('./Controllers/Signup');
const ForgetPass = require('./Controllers/ForgetPass');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.post("/api/login", Login)
app.post("/api/signup", Signup)
app.post("/api/forgetPass", ForgetPass)

///Connect DB
const baseUri = process.env.MONGO_URI;
mongoose.connect(baseUri);
mongoose.connection.on("connected", () => console.log("mongoDB is connected"));
mongoose.connection.on("error", (err) => console.log("error", err));

app.listen(PORT,()=> console.log(`server is running on localhost:${PORT}`))