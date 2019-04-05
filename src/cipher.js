window.cipher = {
  encode: (userText, offSet) => {
    let newText = ""
    for (let i = 0; i < userText.length; i++) {
      let character = userText[i].charCodeAt(0);
      if (character >= 65 && character <= 90){
        let newCharacter = (character - 90 - offSet)%26+90
        newText = newText.concat(String.fromCharCode(newCharacter))
      }
      else if (character >= 97 && character <= 122){
        let newCharacter1 = (character - 97 + offSet)%26+97
        newText = newText.concat(String.fromCharCode(newCharacter1))
      }
      else if (character >= 33 && character <= 64){
        let newCharacter2 = (character - 33 + offSet)%32+33
        newText = newText.concat(String.fromCharCode(newCharacter2))
      }
      else {
        newText = newText.concat(userText[i])
      }
    }
    return newText
  },
  decode: (userText, offSet) => {
    let newText = ""
    for (let i = 0; i < userText.length; i++) {
      let character = userText[i].charCodeAt(0);
      if (character >= 65 && character <= 90){
        let newCharacter = (character + 65 - offSet)%26+65
        newText = newText.concat(String.fromCharCode(newCharacter))
      }
      else if (character >= 97 && character <= 122) {
        let newCharacter1 = (character - 122 - offSet) %26 + 122
        newText = newText.concat(String.fromCharCode(newCharacter1))
      }
      else if (character >= 33 && character <= 64) {
        let newCharacter2 = (character - 64 - offSet) %32 + 64
        newText = newText.concat(String.fromCharCode(newCharacter2))
      }
      else {
        newText = newText.concat(userText[i])
      }
    }
    return newText
  }
};