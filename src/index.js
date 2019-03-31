function saveUser(){
    let user1 = document.getElementById("user1").value;
    let user2 = document.getElementById("user2").value;
    let userForm = document.getElementById("userForm");
    if(user1 && user2 != ""){
      localStorage.setItem("name1", user1);
      localStorage.setItem("name2", user2);
      userForm.submit();
  }
}
function setName(){
    let sayHi = document.getElementById("sayHi");
    sayHi.innerHTML = "Hola, "+localStorage.getItem("name1");

}

function encoding(){
    let codingFor = document.getElementById("codingFor");
    codingFor.innerHTML = "Codificando mensaje para "+localStorage.getItem("name2")
    let eyeBtn = document.getElementById("eyeBtn")
    eyeBtn.addEventListener("click", function(){
        let eyeIcon = document.getElementById("eyeIcon")
        let hiddenText = document.getElementById("hiddenText")
        if (eyeIcon.getAttribute("src") == "eye-closed.svg"){
            hiddenText.setAttribute("type", "text")
            eyeIcon.setAttribute("src", "eye.svg")
        } 
        else{
            eyeIcon.setAttribute("src", "eye-closed.svg")
            hiddenText.setAttribute("type", "password")
        }
    })

    let defaultOffSet = document.getElementById("defaultOffSet");
    let userOffSet = document.getElementById("userOffSet");
    let customeOffSet = document.getElementById("customeOffSet");
    customeOffSet.setAttribute("value", 1)
    customeOffSet.style.display = "none";
    defaultOffSet.addEventListener("click", function(){
        if(defaultOffSet.checked){
            customeOffSet.style.display = "none";
        }
    })

    userOffSet.addEventListener("click", function(){
        if(userOffSet.checked){
            customeOffSet.style.display = "block";
        }
    })

    let encodeBtn = document.getElementById("encodeBtn")
    let hiddenText = document.getElementById("hiddenText")
    encodeBtn.addEventListener("click", function(){
      let hiddenTextValue = hiddenText.value.toUpperCase()
      let offSetValue = 3
      if (userOffSet.checked){
        offSetValue = parseInt(customeOffSet.value)
  
      }
      if (hiddenText !=""){
        let newText = cipher.encode(hiddenTextValue, offSetValue)
        let finalText = document.getElementById("finalText")
        finalText.setAttribute("value", newText)
      }
      else{
        alert("No has ingresado un texto para cifrar")
      }
    })
}


function decoding(){
    let decodingFrom = document.getElementById("decodingFrom");
    decodingFrom.innerHTML = "Descifrando mensaje de "+localStorage.getItem("name2")
    let defaultOffSet = document.getElementById("defaultOffSet");
    let userOffSet = document.getElementById("userOffSet");
    let customeOffSet = document.getElementById("customeOffSet");
    customeOffSet.style.display = "none";
    defaultOffSet.addEventListener("click", function(){
        if(defaultOffSet.checked){
            customeOffSet.style.display = "none";
        }

    }
    )
    userOffSet.addEventListener("click", function(){
        if(userOffSet.checked){
            customeOffSet.style.display = "block"
        }
    }
    )
}

/* agregar los botones encodeBtn y decodeBtn dentro de un addeventlistener, será click (sin on) y llamará a la función cipher.encode o cipher.decode
*/

/*
let encodeBtn = document.getElementById("encodeBtn")
encodeBtn.addEventListener("click", cipher.encode(){
    if

  }
  
  )
  let text = document.getElementById("text")
*/