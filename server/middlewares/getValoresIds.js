
const { ObjectId } = require('mongodb')


/*
[ObjectId("64124bb63d86f6f218e0dfe7"), ObjectId("64124ce23d86f6f218e0dfef")]
*/



function parseValoresIds(filtro) {
    //const _id = new ObjectId("4eb6e7e7e9b7f4194e000001")
    let nuevoArray = [];
    for (let index = 0; index < filtro.length; index++) {
        nuevoArray.push(new ObjectId(filtro[index]))
    }

    return nuevoArray

}



function getValoresIds(req, res, next) {

    const { filterId } = req.params;

    let filtro = filterId.split("+")
    filtro.pop()
    let filter = [...parseValoresIds(filtro)]
    res.locals.filterId = filter;
    next()
}

module.exports = getValoresIds