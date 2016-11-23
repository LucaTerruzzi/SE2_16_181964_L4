/**
 * @brief Show and hide the user form.
 */
function showForm(form){
    if(document.getElementById("user_form").style.display == "none"){
        for(var i = 0; i < document.getElementById("user_form").elements.length -1; i++){
            document.getElementById("user_form").elements[i].value = "";
        }
        document.getElementById("user_form").style.display = "block";
    }else{
        document.getElementById("user_form").style.display = "none";
    }
}
