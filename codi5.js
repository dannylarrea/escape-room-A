function validarform() {
    try {
        if (document.getElementById("A").value == "1 o 2 vegades" && document.getElementById("B").value == "3 o 4 vegades") {
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
