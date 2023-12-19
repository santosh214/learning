const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express()
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5001;


app.get('/', (req, res) => {
    res.send("api is working")
})
//middleware
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log("listening on port=", port)
})
console.log("in express")