function usepassa(){
    var form = document.forms["usepass"];
    var use = form["username"].value;
    var pass = form["password"].value;
    if (use !== "Emre"){
        alert("Lütfen doğru giriş yapınız");
        return false;
    }
    else if (pass !== "Kaya"){
        alert("Lütfen doğru giriş yapınız");
        return false;
    }
    alert("Hoşgeldiniz....");
    return true;
};

function tıklan(){
    document.getElementById("emre").style.display = "none";
   


}
    

