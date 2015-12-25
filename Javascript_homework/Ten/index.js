function clicked(){
    var form = document.forms["form"];
    var user = form["username"].value;
    var password = form["password"].value;
    var select = form["selection"].value;
    var error ="";
    if(user == "" || user==null){
        error = "Must enter username";
    }
    if(password == "" || password==null){
        error = "Must enter password";
    }
    if(select=="other"){

    }
    document.getElementById("error").innerHTML = error;

};