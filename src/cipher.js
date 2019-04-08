window.cipher = {
  encode: (userText, offSet) => {
    let newText = ""
    let newCharacter = ""
    for (let i = 0; i < userText.length; i++) {
      let character = userText[i].charCodeAt(0);
      if (character >= 65 && character <= 90){
        newCharacter = (character - 65 + offSet)%26+65
        newText = newText.concat(String.fromCharCode(newCharacter))
      }
      else if (character >= 97 && character <= 122){
        newCharacter = (character - 97 + offSet)%26+97
        newText = newText.concat(String.fromCharCode(newCharacter))
      }
      else {
        newText = newText.concat(userText[i])
      }
    }
    return newText
},
  decode: (userText, offSet) => {
    let newText = ""
    let newCharacter = ""
    for (let i = 0; i < userText.length; i++) {
      let character = userText[i].charCodeAt(0);
      if (character >= 65 && character <= 90){
        newCharacter = (character - 90 - offSet)%26+90
        newText = newText.concat(String.fromCharCode(newCharacter))
      }
      else if (character >= 97 && character <= 122) {
        newCharacter = (character - 122 - offSet)%26+122
        newText = newText.concat(String.fromCharCode(newCharacter))
      }
      else {
        newText = newText.concat(userText[i])
      }
  }
  return newText
}
};