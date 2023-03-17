const express = require("express")
const recetaSchema = require("../models/receta")

const router = express.Router()

const getValores = require("../middlewares/getValores")
const parseValores = require("../middlewares/parseValores")

//CREAR RECETA

router.post("/recetas", (req, res) => {
    const user = recetaSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//DEVUELVE TODAS LAS RECETAS

router.get("/recetas", (req, res) => {
    recetaSchema
        .find().sort({ receta: 1 })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})



//DEVUELVA UNA RECETA POR EL ID
router.get("/recetas/:id", (req, res) => {
    const { id } = req.params;

    recetaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})



//DEVUELVE LAS RECETAS CON FILTROS
router.get("/recetas/filter/:filter", getValores, parseValores, (req, res) => {

    let filter = res.locals.filter

    recetaSchema
        .find(filter)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})


//ACTUALIZA UNA RECETA
router.put("/recetas/:id", (req, res) => {
    const { id } = req.params;
    const { receta, sector, apto, tipo, porciones, procedimiento, ingredientes } = req.body;
    recetaSchema
        .updateOne({ _id: id }, { $set: { receta, sector, apto, tipo, porciones, procedimiento, ingredientes } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

//BORRAR UNA RECETA
router.delete("/recetas/:id", (req, res) => {
    const { id } = req.params;
    recetaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})





module.exports = router;