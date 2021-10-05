function usepassa(){
    let form = document.forms["usepass"];
    let use = form["username"].value;
    let pass = form["password"].value;
    if (use !== "Emre"){
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("username").style.borderWidth = "5px";
        return false;
    }
    else if (pass !== "Kaya"){
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password").style.borderWidth = "5px";
        return false;
    }
    document.getElementById("username").style.borderColor = "green";
    document.getElementById("username").style.borderWidth = "5px";
    document.getElementById("password").style.borderColor = "green";
    document.getElementById("password").style.borderWidth = "5px";
    return true;

};

function tıklan(){
    document.getElementById("emre").style.display = "none";
   


}
    

