function validarform() {
    try {
        if (document.getElementById("A").value == "1,62" && document.getElementById("B").value == "(1+sqrt(5))/2") {
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