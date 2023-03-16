const mongoose = require("mongoose");

const recetaSchema = mongoose.Schema(
    {
        receta: { type: String, unique: true },
        sector: { type: String},
        apto: [String],
        tipo: { type: String },
        porciones: { type: String},
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