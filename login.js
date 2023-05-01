
    localStorage.setItem('Sunzineloged_in_user', JSON.stringify(null))

    let email2 = document.getElementById("email2")
    let password2 = document.getElementById("password2")

    let Sunzineuser = JSON.parse(localStorage.getItem("Sunzineuser"))
    console.log(Sunzineuser);


    function checkpass() {
        if (document.getElementById("password2").type == "password") {
            document.getElementById("password2").type = "text"
            document.getElementById("Passwordbut").innerHTML = `<span class="material-symbols-outlined">
visibility
</span>`
        } else {
            document.getElementById("password2").type = "password"
            document.getElementById("Passwordbut").innerHTML = `<span class="material-symbols-outlined">
visibility_off
</span>`
        }
    }

    function login() {

        if (email2.value == "" || password2.value == "") {
            alert("enter details")
        } else {


            let found = Sunzineuser.find((current) => current.email == email2.value && current.password == password2.value);



            if (found) {
                console.log(found)
                localStorage.setItem('Sunzineloged_in_user', JSON.stringify(found))


                window.location.href = "index.html"
                alert("Login Successful")
            } else {
                alert("User not found")
            }


        }
        email2.value = ""
        password2.value = ""
    }
    function gotoit() {
        window.location.href = "signup.html"
    }

