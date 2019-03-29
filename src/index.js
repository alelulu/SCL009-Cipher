function saveUser(){
    let user = document.getElementById("user").value;
    let userForm = document.getElementById("userForm");
    if(user!=""){
      localStorage.setItem("name", user);
      userForm.submit();
  }
}
function setName(){
    let sayHi = document.getElementById("sayHi");
    sayHi.innerHTML = "Hola, "+localStorage.getItem("name");
}

function encoding(){
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
        customeOffSet.style.display = "block";
    }
}
)
}

function decoding(){
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