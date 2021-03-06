window.cipher = {
  encode: (userText, offSet) => {
    let newText = "";
    let newCharacter = "";
    //se crea array para trabajar con caracteres especiales
    let symbols = ["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "Ñ", "ñ"];
    for (let i = 0; i < userText.length; i++) {
      let character = userText[i].charCodeAt(0);
      //para cifrar mayúsculas
      if (character >= 65 && character <= 90){
        newCharacter = (character - 65 + offSet) % 26 + 65;
        newText = newText.concat(String.fromCharCode(newCharacter));
      } 
      //para cifrar minúsculas
      else if (character >= 97 && character <= 122){
        newCharacter = (character - 97 + offSet) % 26 + 97;
        newText = newText.concat(String.fromCharCode(newCharacter));
      } 
      //para cifrar números
      else if (character >= 48 && character <= 57) {
        newCharacter = (character - 48 + offSet) % 10 + 48;
        newText = newText.concat(String.fromCharCode(newCharacter));
      }
      //para cifrar tildes y ñ
      else if (symbols.includes(userText[i])) {
        character = symbols.indexOf(userText[i])
        newCharacter = (character + offSet) % symbols.length
        newText = newText.concat(symbols[newCharacter])
      }
      //para todo el resto de posibilidades sólo concatena
      else {
        newText = newText.concat(userText[i]);
      }
    }
    return newText;
  },
  decode: (userText, offSet) => {
    let newText = "";
    let newCharacter = "";
    let symbols = ["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "Ñ", "ñ"];
    for (let i = 0; i < userText.length; i++) {
      let character = userText[i].charCodeAt(0);
      //para descifrar mayúsculas
      if (character >= 65 && character <= 90){
        newCharacter = (character - 90 - offSet) % 26 + 90;
        newText = newText.concat(String.fromCharCode(newCharacter));
      } 
      //para descifrar minúsculas
      else if (character >= 97 && character <= 122) {
        newCharacter = (character - 122 - offSet) % 26 + 122;
        newText = newText.concat(String.fromCharCode(newCharacter));
      } 
      //para descifrar números
      else if (character >= 48 && character <= 57) {
        newCharacter = (character - 57 - offSet) %10 + 57;
        newText = newText.concat(String.fromCharCode(newCharacter));
      }
      //para descifrar tildes y ñ
      else if (symbols.includes(userText[i])) {
        character = symbols.indexOf(userText[i])
        newCharacter = (character - (symbols.length - 1) - offSet) % symbols.length + (symbols.length - 1);
        newText = newText.concat(symbols[newCharacter])
      }
      //para todo el resto de posibilidades sólo concatena
      else {
        newText = newText.concat(userText[i]);
      }
    }
    return newText;
  }
};