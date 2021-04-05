function algoritmo(clientes, premium, economy){

    clientes.sort();
    const mayores = [];
    const menores = [];
    const result = [];

    for (var i = 0; i < clientes.length; i++ ){

        if (clientes[i] >= 100){
            mayores.push(clientes[i]);
        }else{
            menores.push(clientes[i]);
        }
    }

    const pre = suma(mayores);
    const eco = suma(menores);

    result.push(pre);
    result.push(eco);

    return result;
}
function suma(valores){

    valores.sort();
    let sum = 0;

    for(var i = valores.length - 3; i < valores.length; i++ ){
        sum = sum + valores[i];
    }

    return sum;
}

module.exports = algoritmo
