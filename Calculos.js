function sumar(a,b){
    return a + b;
};

function restar(a,b){
    return a - b;
};

function multiplicar(a,b){
    return a * b;
};

function dividir(a,b){
    if(b == 0){
        console.log('\nNo se puede dividir por 0')
    }else{
        return a / b};
};
/* A traves de este comando podemos hacer que las funciones se puedan ejecutar en otra clase u archivo
* El comando es Exports.(nombre de variable donde se va almacenar la funcion)=Funcion(Nombre de la funcion
* que se va ejecutar)
*/
exports.sumar=sumar;
exports.restar=restar;
exports.multiplicar=multiplicar;
exports.dividir=dividir;


