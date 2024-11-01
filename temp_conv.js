document.getElementById('submitButton').onclick = function(){
    user_input = document.getElementById('tempInput').value
    if (document.getElementById('radButton').checked){
        f = ((9/5) *  user_input) + 32
        document.getElementById('answer').innerHTML = f
    }
    else{
        window.alert("Select A conversion unit");
    }
}