window.cipher = {
  encode: (userText, offSet) => {
    let newText = ""
    for (let i = 0; i < userText.length; i++) {
      let character = userText[i].charCodeAt(0);
      if (character >= 65 && character <= 90){
        let newCharacter = (character - 65 + offSet)%26+65
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
    for (let i = 0; i < userText.length; i++) {
      let character = userText[i].charCodeAt(0);
      if (character >= 65 && character <= 90){
        let newCharacter = (character - 65 - offSet)%26+65
        newText = newText.concat(String.fromCharCode(newCharacter))
      }
      else {
        newText = newText.concat(userText[i])
      }
    }
    return newText
  }
};
