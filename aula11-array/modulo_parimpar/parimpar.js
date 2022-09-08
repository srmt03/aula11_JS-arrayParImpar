/**********************************************************************
 * Objetivo: Funcoes de exbicao de numeros pares e impares separadamente  
 * Data: 29/08
 * Autor: Samuel Matos
 * Versão: 1.0
 **********************************************************************/
//Retorna uma sequencia de numeros pares 
const getPares = function (numero1, numero2) {
    let numIncial = parseInt(numero1);
    let numFinal = parseInt(numero2);
    let pares = [];
    let erro = true;

    while (numIncial <= numFinal) 
    {
        if (numIncial % 2 == 0)
        {
            pares.push(numIncial);
            erro = false;
        }
        numIncial +=1;
    }
    if (erro)
        return false;
    else
        return pares;
}

//Retorna uma sequencia de numeros impares
const getImpares = function (numero1, numero2) {
    let numIncial = parseInt(numero1);
    let numFinal = parseInt(numero2);
    let impares = [];
    let erro = true;

    while (numIncial <= numFinal) 
    {
        if (numIncial % 2 != 0)
        {
            impares.push(numIncial);
            erro = false;
        }
        numIncial +=1;
    }
    if (erro)
        return false;
    else
        return impares;
}

const getParesImpares = function (numero1, numero2) {
    let numIncial = parseInt(numero1);
    let numFinal = parseInt(numero2);
    let pares = [];
    let impares = [];
    let paresImpares = [];
 
    //Chama as funcoes que separam os pares e impares
    pares = getPares(numIncial, numFinal);
    impares = getImpares(numIncial, numFinal);

    paresImpares = [pares, impares];

    return paresImpares;
}

module.exports = {
    getPares,
    getImpares,
    getParesImpares
}