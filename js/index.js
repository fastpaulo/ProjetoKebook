

function CheckInput(){
    let valueUser = document.getElementById("name").value;
    let valuePass = document.getElementById("password").value;
if (valueUser == "") {
    document.getElementById("userErro").style.display = "inline"
    document.getElementById("name").style.borderColor = "red"
}else{
    document.getElementById("name").style.borderColor = "green"
    document.getElementById("userErro").style.display = "none"
}
if (valuePass == "") {
    document.getElementById("passErro").style.display = "inline"
    document.getElementById("password").style.borderColor = "red"
}else{
    document.getElementById("password").style.borderColor = "green"
    document.getElementById("passErro").style.display = "none"
}
}

function validateField(){
    CheckInput();
    let valueUser = document.getElementById("name").value;
    let valuePass = document.getElementById("password").value;
    if (!valueUser == "" && !valuePass == "" ) {
       document.getElementById("success").style.display = "inline" 
    }else{
        document.getElementById("success").style.display = "none" 
    }
    

}
