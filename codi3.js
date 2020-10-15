function validarform() {
    try {
        if (document.getElementById("A").value == "UHTRED") {
            return true;
        }
        /*else if (condition) {
               //code
           }*/
        else {
            alert("Intenta-ho de nou!");
            return false;
        }
    } catch (error) {
        //alert(error);
    }
    alert("Intenta-ho de nou!");
    return false;
}