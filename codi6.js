function validarform() {
    try {
        if (document.getElementById("A").value == "esta bé" && document.getElementById("B").value == "esta mal") {
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