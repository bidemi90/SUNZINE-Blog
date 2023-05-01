
let Sunzineuser = JSON.parse(localStorage.getItem("Sunzineuser"))
console.log(Sunzineuser);
let name = document.getElementById("name")
let email = document.getElementById("email")
let phonenumber = document.getElementById("phonenumber")
let password = document.getElementById("password")
let confirmpassword = document.getElementById("confirmpassword")


function login() {
  location.href = "login.html"
}






function sub() {
  let mememe = password.value


  let found = Sunzineuser.find((current) => current.email == email.value);



if (found) {
alert("Email already use")
email.value=""
} else {
  if (name.value == "" || email.value == "" || phonenumber.value == "" || password.value == "" || confirmpassword.value == "") {
    alert("input details")
  } else if (mememe.length <= 6) {
    alert("not a long password   password must be 6 characters or longer")
  } else if (password.value != confirmpassword.value) {
    alert("incorrect password")
  } else {
    let userarray = {
      name: name.value,
      email: email.value,
      phonenumber: phonenumber.value,
      password: password.value,
    }
    if (Sunzineuser == null) {
      Sunzineuser = []
      Sunzineuser.push(userarray)
      localStorage.setItem("Sunzineuser", JSON.stringify(Sunzineuser))
    } else {
      Sunzineuser.push(userarray)
      localStorage.setItem("Sunzineuser", JSON.stringify(Sunzineuser))
    }
    alert("signup successful")
    window.location.href = "login.html"
  }
}

  

  password.value = ""
  confirmpassword.value = ""

}



function checkpass() {
  if (document.getElementById("password").type == "password") {
    document.getElementById("password").type = "text"
    document.getElementById("Passwordbut").innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`
  } else {
    document.getElementById("password").type = "password"
    document.getElementById("Passwordbut").innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`
  }
}

function checkpass2() {
  if (document.getElementById("confirmpassword").type == "password") {
    document.getElementById("confirmpassword").type = "text"
    document.getElementById("Passwordbut2").innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`
  } else {
    document.getElementById("confirmpassword").type = "password"
    document.getElementById("Passwordbut2").innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`
  }
}


