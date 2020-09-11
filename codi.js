function validarform(){
    if(document.getElementById("A").value=="1,62" && document.getElementById("B").value=="(1+sqrt(5))/2"){
        return true;
    }else{
        alert("Intenta-ho de nou!")
        return false;
    }
}
