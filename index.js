const express = require("express");
const { connection } = require("./config/db");
const { tripRoute } = require("./route/trip.route");
require("dotenv").config()
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

app.use("/", tripRoute)

app.listen(process.env.PORT || 4000,async()=>{
    try {
        await connection
        console.log("Connected to database")
        console.log(`Your server is running on ${process.env.PORT}`)
    } catch (error) {
        console.log("Cannot connect to Database")
        console.log(error.message)
    }
})