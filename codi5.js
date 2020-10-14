function validarform() {
    try {
        if (document.getElementById("A").value == "Dents ven nets" && document.getElementById("B").value == "Tens els dents bruts!") {
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
