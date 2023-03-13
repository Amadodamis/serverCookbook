const mongoose = require("mongoose");

const recetaSchema = mongoose.Schema(
    {
        receta: { type: String, unique: true, required: true },
        sector: { type: String, required: true },
        apto: [String],
        tipo: { type: String, required: true },
        porciones: { type: String, required: true },
        procedimiento: { type: String },
        ingredientes: [
            {
                ingrediente: { type: String },
                cantidad: { type: String },
                unidad: { type: String },
                _id: false
            },
        ]
    },

    { versionKey: false }
)

module.exports = mongoose.model("recetas", recetaSchema)