var name_ = ""
var email = ""
var pass = ""
var phone = ""

function registerUser(){
    
    name_ = document.getElementById("nameInp").value
    email = document.getElementById("mailInp").value
    pass = document.getElementById("passInp").value
    phone = document.getElementById("phoneInp").value
    alert("Hello "+name_)

    // if(){

    // }
    window.location.href="dashboard.html"

}

function loginUser(){
    alert("Loged in")
    email = document.getElementById("email_l").value
    pass = document.getElementById("pass_l").value
}

function updatePost(){
    alert("Post Created🙌🪄")
    window.location.href="dashboard.html"
}