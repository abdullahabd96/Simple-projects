
document.getElementById("chckpwd").addEventListener("click", (event)=> {        
    if(document.getElementById("password").type == "password") {
        document.getElementById("chckpwd").style.transition = "all 0.5s";
        document.getElementById("chckpwd").innerHTML = "😲Hide Password";
        document.getElementById("password").type = "text";
    } else {
        document.getElementById("chckpwd").style.transition = "all 0.5s";
        document.getElementById("chckpwd").innerHTML = "😑 Show Password";
        document.getElementById("password").type = "password";
    }
    event.preventDefault(); 
});