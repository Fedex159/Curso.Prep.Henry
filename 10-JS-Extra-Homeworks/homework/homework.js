// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var newArray = [];
  for (let clave in objeto) {
    newArray.push([clave, objeto[clave]]);
  }
  return newArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var newObj = {};
  for (var i = 0; i < string.length; i++) {
    if (newObj[string[i]] === undefined) {
      newObj[string[i]] = 1;
    } else {
      newObj[string[i]]++;
    }
  }
  return newObj;
}


function changeCaracter (str, c, ind) {
  //La funcion recibe un string, un caracter y un indice. 
  //Cambia en la posicion que se le paso por el nuevo caracter
  //Si indice no es valido o el caracter es una cadena, devuelve la misma cadena.
  //Ejemplo: 'Hola', 'i', 3 -> 'Holi'
  var newStr = '';
  if ((ind < str.length) && (ind >= 0) && (c.length === 1)){
    var oldStr = str.slice(0, ind);
    newStr = oldStr + c + str.slice (ind + 1, str.length);
    return newStr;
  }  
  return str;  
}

function switchChar (str, ind) {
  // switch 2 caracteres de un string pasandole el indice.
  // indice tiene que ser mayor 0
  // Ej: Hola, 1 -> oHla
  var newStr = '';
  if ((ind > 0) && (ind < str.length)) {
    newStr = changeCaracter(str, str[ind], ind-1); // Ej: ('Hola', 'o' , 1) -> ('Hola', 'o' , 0) -> 'oola'
    newStr = changeCaracter(newStr, str[ind-1], ind);       // Ej: ('oola', 'H', 1) -> 'oHla' 
    return newStr;
  }
  return str;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var newStr = s;
  //Num es un contador, para saber cuanta veces movi una letra hasta el principio, 
  //si ya movi una, la prox deberia moverse al lado, y no al principio.             
  var num = 0;
  for (var i = 0; i < s.length; i++) {
    if ( s[i] === s[i].toUpperCase() ) {     
      for (var j = i; ( (j > 0) && (j > num) ); j--) {
        newStr = switchChar(newStr, j);   
      }
      num++;      
    }
  }
  return newStr;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var newStr = '';
  var subStr = '';
  var num = 0;
  var count = 0;
  for (var i = 0; i <= str.length; i++) {
    // Recorro hasta encontrar un espacio o hasta el final de la cadena
    if ( (str[i] === ' ') || (i === str.length) ){
      subStr = str.slice(num, i);                                          // Corto la cadena
      for (var j = 0; j < subStr.length; j++) {                            // Recorro la cadena cortada
        for (var k = subStr.length - 1; ( (k > 0) && (k > count) ); k--) { // Invierto las posiciones de los caracteres
          subStr = switchChar(subStr, k);          
        }
        count++;                                                             // Contador para saber cuantas veces movi en la cadena cortada
      }
      count = 0;                                                             // Vuelve a 0, porque ahora habra una nueva sub cadena
      if (num === 0) {
        newStr = subStr;
      } else {
        newStr = newStr + ' ' + subStr;
      }                                                                      // Ahora empiezo a contar denuevo, pero cuando corte la nueva cadena,
      num = i+1;                                                             // Lo va a hacer desde el caracter siguente al espacio                                                                             
    }    
  }
  return newStr;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str = numero.toString();  
  for (var i = 0; i < (str.length / 2); i++) {      
    if(str[i] != str[str.length-1-i]) {      
      return 'No es capicua';
    }
  } 
  return 'Es capicua';
}

function deleteChar(str, indice) {
  // Dada una cadena y un indice, elimina ese caracter de la cadena
  // y devuelve la nueva cadena modificada.
  // Si el indice esta fuera de rango o es la cadena vacia, devuelve 
  // la cadena pasada.
  if ((indice >= 0) && (indice < str.length)){
    var newStr = str.slice(0, indice) + str.slice(indice + 1, str.length); 
    return newStr;  
  }
  return str;
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newStr = cadena;
  var count = 0;
  for (var i = 0; i < cadena.length; i++) {
    if ((cadena[i] === 'a') || (cadena[i] === 'b') || (cadena[i] === 'c')) {
      newStr = deleteChar(newStr, i-count); 
      count++;
    }
  }
  return newStr;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var strCopy = '';
  if (arr.length > 0) {
    for (var i = 1; i < arr.length; i++) {
      for (var j = i; j > 0; j--) {               // For hasta el principio del arreglo, para llevar el mayor adelante
        if (arr[j].length < arr[j-1].length) {    // Switch de elementos del array si derecha mayor que izquierda
          strCopy = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = strCopy;
        }
      }      
    }
  }  
  return arr;
}

function buscarNumero(arr, num) {
  // Dado un arreglo y un num, devuelve true si el num se encuentra en el arreglo
  // En caso de arreglo vacio, o no haber coincidencia, devuelve false
  var bool = false;
    if (arr.length > 0) {      
        arr.forEach(function(elemento){          
          if (elemento === num) {            
            bool = true;
          }           
        });        
    }    
  return bool;  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newArray = [];
  if (arreglo1.length > arreglo2.length) {
    for (var i = 0; i < arreglo1.length; i++) {
      if (buscarNumero(arreglo1, arreglo1[i]) && buscarNumero(arreglo2, arreglo1[i])){
        newArray.push(arreglo1[i]);
      }
    }
  } else {
     for (var i = 0; i < arreglo2.length; i++) {
      if (buscarNumero(arreglo2, arreglo2[i]) && buscarNumero(arreglo1, arreglo2[i])){
        newArray.push(arreglo2[i]);
      }
    }
  }
  return newArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
   changeCaracter,
   switchChar,
   deleteChar,
   buscarNumero
};

