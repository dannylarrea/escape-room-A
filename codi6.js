function validarform() {
    try {
        if (document.getElementById("A").value == "4 QUESOS") {
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
    alert("Ho tornes a intentar");
    return false;
}