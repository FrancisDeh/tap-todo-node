require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3000

let todoRoutes = require("./routes/todoRoutes")
app = express()
// handle - get and send json data
app.use(express.json())

app.use("/todos", todoRoutes)

// configure database
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log("Connected successfully to database")
    app.listen(PORT, () => console.log(`Server started on port ${PORT} 🔥`))
}).catch(error => {
    console.log(error)
})


