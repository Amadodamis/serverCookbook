function getValores(req, res, next) {

    const { filter } = req.params;

    let filtro = filter.split("--")

    filtro.pop()
    let sector = filtro[0]
    let apto = filtro[1]
    let ingredientes = filtro[2]
    apto = apto.split("+")
    ingredientes = ingredientes.split("+")
    res.locals.sector = sector;
    res.locals.apto = apto;
    res.locals.ingredientes = ingredientes;
    next()
}

module.exports = getValores

