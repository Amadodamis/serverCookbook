const express = require("express")
const cors =require('cors')
const mongoose = require("mongoose")
require("dotenv").config();
const recetaRoutes=require("./routes/receta")

const app = express();
const port = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use("/api",recetaRoutes)

app.get("/", (req, res) => {
    res.send("Api recetas, routas -> /api/recetas  , /api/recetas/:id")
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to mongoDB Atlas"))
    .catch((error) => console.error(error))


app.listen(port, () => console.log("server listening on port ", port))