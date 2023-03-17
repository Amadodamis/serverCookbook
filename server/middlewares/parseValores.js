function agregarIngredientes(ingredientes) {
    let $all = [];
    for (let index = 0; index < ingredientes.length; index++) {
        $all.push(
            { "$elemMatch": { ingrediente: ingredientes[index] } }
        )
    }
    return $all
}

function agregarApto(apto) {
    let $all = [];
    for (let index = 0; index < apto.length; index++) {
        $all.push(apto[index])
    }
    return $all
}


function armarFiltro(sector, $allIngredientes, $allApto) {
    let filter = {}
    if (sector.length) {
        filter.sector = sector;
    }
    if ($allIngredientes.length > 0) {
        filter.ingredientes = { $all: [...$allIngredientes] };
    }

    if ($allApto.length > 0) {
        filter.apto = { $all: [...$allApto] }
    }

    return filter;
}



function parseValores(req, res, next) {
    //res.locals.sector.length
    //res.locals.apto[0]===""
    //res.locals.ingredientes[0]===""

    //console.log(res.locals.sector)
    //console.log(res.locals.apto)
    //console.log(res.locals.ingredientes)
    let filter;

    let $allIngredientes = []
    if (res.locals.ingredientes[0] !== "") {
        $allIngredientes = [...agregarIngredientes(res.locals.ingredientes)]
    }

    let $allApto = []
    if (res.locals.apto[0] !== "") {
        $allApto = [...agregarApto(res.locals.apto)]
    }

    filter = armarFiltro(res.locals.sector, $allIngredientes, $allApto)

    res.locals.filter = filter;

    next()
}

module.exports = parseValores

