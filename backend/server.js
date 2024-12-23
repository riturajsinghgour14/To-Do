const express = require("express");
require ('dotenv').config();
const colors = require("colors");
const connectDB = require("./config/db.config");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended : true}))
// DB Connetion
connectDB();

app.get("/", (req,res) => {
    res.json({
        msg:"WELCOME TO TO-DO TASK APP"
    })
});

// ToDo Routes
app.use("/api/todo", require("./routers/todoRoutes"))


app.listen(PORT,() => {
    console.log(`Server is Running At PORT ${PORT}`)
});