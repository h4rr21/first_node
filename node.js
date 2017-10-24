let sumarDosNumeros = (primerNumero, segundoNumero) => {
    return new Promise((fullfill, reject) =>{
        let resultado = primerNumero + segundoNumero;
        fullfill(resultado)
    });
}

sumarDosNumeros(2,3).then( (resultado)=> {
    console.log(resultado)
})

