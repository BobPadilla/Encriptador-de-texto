const textArea = document.querySelector(".txt-area");
const mensaje = document.querySelector(".txt-area2");

// console.log(campo-mensaje campo-texto);
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function Encrypta(){
  const textoEncriptado = encriptar(textArea.value)
  mensaje.value =textoEncriptado
  textArea.value = "";
  // ocultar la imagen cuando aparesca nuestro texto//
  mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [
        ["e","enter"],// indice 0
        ["i","imes"],// indice 1
        ["a","ai"],// indice 2
        ["o","ober"],// indice 3
        ["u","ufat"]];// indice 4
        // console.table(matrizCodigo)
        stringEncriptada = stringEncriptada.toLowerCase()
        for(let i=0; i<matrizCodigo.length;i++){
          if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
          }  
        }
        return stringEncriptada
}       
    
function Desencrypta(){
  const textoEncriptado = desencriptar(textArea.value)
  mensaje.value =textoEncriptado
  textArea.value = "";
  
}

function desencriptar(stringDesencriptada){
  let matrizCodigo = [
    ["e","enter"],// indice 0
    ["i","imes"],// indice 1
    ["a","ai"],// indice 2
    ["o","ober"],// indice 3
    ["u","ufat"]];// indice 4
      // console.table(matrizCodigo)
      stringDesencriptada = stringDesencriptada.toLowerCase()
      for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
          stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }  
      }
      return stringDesencriptada
}       


// function bot-encriptar(){
//     const texto = encriptar (campo_texto.value);
//     campo-mensaje.value = texto
   
// }

// function encriptar(fraseEncriptada){
//     for (let i = 0 ; i < matrizcodigo.length; i++){
//         if(fraseEncriptada.includes(matriz_code[i][0])){
//             fraseEncriptada = fraseEncriptada.replaceAll(
//                 matriz_code [i][0],
//                 matriz_code [i][1]
//             )

//         }
//     }
//     return fraseEncriptada;
// }
// [].length