function validarform() {
    try {
        if (document.getElementById("A").value == "RAGNAR" && document.getElementById("B").value == "UTHRED") {
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