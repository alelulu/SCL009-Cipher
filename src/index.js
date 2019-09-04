let saveUsersBtn = document.getElementById("save_user_btn")
if (saveUsersBtn != null){
saveUsersBtn.addEventListener("click", () => {
    let user1 = document.getElementById("user1").value;
    let user2 = document.getElementById("user2").value;
    let userForm = document.getElementById("user_form");
    if(user1 && user2 != ""){
      localStorage.setItem("name1", user1);
      localStorage.setItem("name2", user2);
      userForm.submit();
    }
    else{
      let nameAlert = document.getElementById("name_alert")
      nameAlert.style.display = "block"
    }
  })
}

let greetings = document.getElementById("greetings")
if (greetings != null){
  window.addEventListener("load", () => {
    let sayHi = document.getElementById("say_hi");
    sayHi.innerHTML = "Hola, "+localStorage.getItem("name1");
  })
}

let codingPage = document.getElementById("coding_page")
if(codingPage != null){
  window.addEventListener("load", () => {
    let codingFor = document.getElementById("coding_for");
    codingFor.innerHTML = "Codificando mensaje para "+localStorage.getItem("name2")
    let eyeBtn = document.getElementById("eye_btn")
    eyeBtn.addEventListener("click", () => {
      let eyeIcon = document.getElementById("eye_icon")
      let hiddenText = document.getElementById("hidden_text")
      if (eyeIcon.getAttribute("src") == "eye-closed.svg"){
        hiddenText.setAttribute("type", "text")
        eyeIcon.setAttribute("src", "eye.svg")
      } 
      else{
        eyeIcon.setAttribute("src", "eye-closed.svg")
        hiddenText.setAttribute("type", "password")
      }
    })

    let defaultOffSet = document.getElementById("default_offset");
    let userOffSet = document.getElementById("user_offset");
    let customeOffSet = document.getElementById("custome_offset");
    customeOffSet.setAttribute("value", 1)
    customeOffSet.style.display = "none";
    defaultOffSet.addEventListener("click", () => {
      if(defaultOffSet.checked){
        customeOffSet.style.display = "none";
      }
    })
    userOffSet.addEventListener("click", () => {
      if(userOffSet.checked){
        customeOffSet.style.display = "block";
      }
    })

    let encodeBtn = document.getElementById("encode_btn")
    let hiddenText = document.getElementById("hidden_text")
    encodeBtn.addEventListener("click", () => {
      let hiddenTextValue = hiddenText.value
      let offSetValue = 3
      if (userOffSet.checked){
        offSetValue = parseInt(customeOffSet.value)
      }
      if (hiddenText !=""){
        let newText = cipher.encode(hiddenTextValue, offSetValue);
        let finalText = document.getElementById("final_text");
        finalText.setAttribute("value", newText);
        }
      else if (offSetValue < 0) {
        //offSetValue = offSetValue *-1;
        let newText = cipher.decode(hiddenTextValue, offSetValue);
        let finalText = document.getElementById("final_text");
        finalText.setAttribute("value", newText);
      }  
      else{
        alert("No has ingresado un texto para cifrar");
      }
    })
  })
}

let decodingPage = document.getElementById("decoding_page")
if (decodingPage != null){ 
  window.addEventListener("load", () => {
    let decodingFrom = document.getElementById("decoding_from");
    decodingFrom.innerHTML = "Descifrando mensaje de "+localStorage.getItem("name2")
    let defaultOffSet = document.getElementById("default_offset");
    let userOffSet = document.getElementById("user_offset");
    let customeOffSet = document.getElementById("custome_offset");
    customeOffSet.setAttribute("value", 1)
    customeOffSet.style.display = "none";
    defaultOffSet.addEventListener("click", () => {
      if(defaultOffSet.checked){
        customeOffSet.style.display = "none";
      }
      })
      userOffSet.addEventListener("click", () => {
        if(userOffSet.checked){
          customeOffSet.style.display = "block"
        }
      }
      )

    let decodeBtn = document.getElementById("decode_btn")
    decodeBtn.addEventListener("click", () => {
    let offSetValue = 3
    let encondeText = document.getElementById("enconde_text")
    encondeText = encondeText.value
    if (userOffSet.checked) {
      offSetValue = parseInt(customeOffSet.value)
    }
    if (encondeText != ""){
      let newText = cipher.decode(encondeText, offSetValue)
    let finalText = document.getElementById("final_text")
      finalText.setAttribute("value", newText)
    }
    else{
      alert("No has ingresado un texto para cifrar")
    }
  })
})
}