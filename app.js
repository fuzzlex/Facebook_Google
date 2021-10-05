function usepassa(){
    let form = document.forms["usepass"];
    let use = form["username"].value;
    let pass = form["password"].value;
    if (use !== "Emre"){
        document.getElementById("username").style.backgroundColor = "red";
        document.getElementById("password").style.backgroundColor = "red";
        return false;
    }
    else if (pass !== "Kaya"){
        document.getElementById("username").style.backgroundColor = "red";
        document.getElementById("password").style.backgroundColor = "red";
        return false;
    }
    document.getElementById("username").style.backgroundColor = "green";
    document.getElementById("password").style.backgroundColor = "green";
    return true;

};

function tıklan(){
    document.getElementById("emre").style.display = "none";
   


}
    

