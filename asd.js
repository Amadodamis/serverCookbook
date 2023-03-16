db.recetas.find({tipo:"SOPA",ingredientes: { "$elemMatch": { ingrediente: "PAPA" } }, ingredientes: { "$elemMatch": { ingrediente: "TOMILLO" },tipo:"SOPA"}})

db.recetas.find({
    tipo:"DIP",
}).count()


//ingredientes: { "$elemMatch": { ingrediente: "PAPA" } },
//tipo:"SOPA"