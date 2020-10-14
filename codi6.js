function validarform() {
    try {
        if (document.getElementById("A").value == "La pizza esta creada correctamente" && document.getElementById("B").value == "A la pizza le falta un ingrediente") {
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