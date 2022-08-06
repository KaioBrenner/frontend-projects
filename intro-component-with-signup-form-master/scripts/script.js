function enviar(){
    let fName = document.getElementById("fName")
    let lName = document.getElementById("lName")
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let usuario = email.value.substring(0, email.value.indexOf("@"))
    let dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length)
    let errorI1 = document.getElementById("error-icon1")
    let errorI2 = document.getElementById("error-icon2")
    let errorI3 = document.getElementById("error-icon3")
    let errorI4 = document.getElementById("error-icon4")
    let errorTxt1 = document.getElementById("error-txt1")
    let errorTxt2 = document.getElementById("error-txt2")
    let errorTxt3 = document.getElementById("error-txt3")
    let errorTxt4 = document.getElementById("error-txt4")
    let inputs = document.querySelectorAll(".inputs")


    if((fName.value.length > 0) && (lName.value.length > 0 ) && ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) && (senha.value.length > 0)){
        errorI1.style.cssText = "display:none; top: -40px;"
        errorI2.style.cssText = "display:none; top: -40px;"
        errorI3.style.cssText = "display:none; top: -40px;"
        errorI4.style.cssText = "display:none; top: -40px;"
        errorTxt1.style.cssText = "display:none; top:-17px;"
        errorTxt2.style.cssText = "display:none; top:-17px;"
        errorTxt3.style.cssText = "display:none; top:-17px;"
        errorTxt4.style.cssText = "display:none; top:-17px;"
        fName.style.cssText = "margin-bottom: 20px; border-color: #00000054;"
        lName.style.cssText= "margin-bottom: 20px; border-color: #00000054;" 
        email.style.cssText = "margin-bottom: 20px; border-color: #00000054;"
        senha.style.cssText = "margin-bottom: 20px; border-color: #00000054;"
    }else{
        errorI1.style.cssText = "display:block; top: -40px;"
        errorI2.style.cssText = "display:block; top: -40px;"
        errorI3.style.cssText = "display:block; top: -40px;"
        errorI4.style.cssText = "display:block; top: -40px;"
        errorTxt1.style.cssText = "display:block; top:-17px;"
        errorTxt2.style.cssText = "display:block; top:-17px;"
        errorTxt3.style.cssText = "display:block; top:-17px;"
        errorTxt4.style.cssText = "display:block; top:-17px;"
        fName.style.cssText = "margin-bottom: 0px; border-color: red;"
        lName.style.cssText= "margin-bottom: 0px; border-color: red;" 
        email.style.cssText = "margin-bottom: 0px; border-color: red;"
        senha.style.cssText = "margin-bottom: 0px; border-color: red;"
    }
}

/*(!((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)))*/