document.getElementById("newAccount").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("signup").style.display = 'block';
    document.getElementById("login").style.display = 'none';
    document.getElementById("resetPassword").style.display = 'none';
});

document.getElementById("oldAccount").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("login").style.display = 'block';
    document.getElementById("signup").style.display = 'none';
    document.getElementById("resetPassword").style.display = 'none';
});
document.getElementById("resetPassword").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("forgoten").style.display = 'block';
    document.getElementById("login").style.display = 'none';
    document.getElementById("signup").style.display = 'none';
    
});

document.getElementById("signup").addEventListener("submit", dodajKorisnika);
document.getElementById("login").addEventListener("submit",proveriKorisnika);
document.getElementById("logout").addEventListener("click",izlogujGa);

window.onload=function () {
    var ulogovan=localStorage.getItem('ulogovaniKorisnik');
    if(ulogovan!==null){
        ulogujGa(ulogovan);
    }
}

function dodajKorisnika(event) {
    event.preventDefault();
    var user = document.getElementById("sign-up-username").value;
    var pass = document.getElementById("sign-up-password").value;
    if(proveraImena(user)!==false){
        alert('Već postoji korisnik');
        return;
    }
    var confirmpass = document.getElementById("sign-up-password-confirm").value;
    var secquestion = document.getElementById("question").value;
    var answer = document.getElementById("answer").value;
    var podaciOKorisniku = {
        user: user,
        pass: pass,
        email: email,
        confirmpass: confirmpass,
        answer: answer,
        secquestion: secquestion
    }

    var korisniciIzStoragea = sviKorisnici();
    korisniciIzStoragea.push(podaciOKorisniku);
    localStorage.setItem('korisnik', JSON.stringify(korisniciIzStoragea));
}

function sviKorisnici() {
    var korisnici = localStorage.getItem('korisnik');
    if (korisnici === null) {
        return [];
    } else {
        return JSON.parse(korisnici);
    }
}

function proveriKorisnika(event){
    event.preventDefault();
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    var korisnik=proveraImena(user);
    if(korisnik===false){
        alert('ne postoji korisnik');
    }else{
        if(korisnik.pass===pass){
            ulogujGa(user);
        }else{
            alert('Pogrešna šifra');
        }
    }
}

function ulogujGa(ime){
    document.getElementById("ulogovan").style.display='block';
    document.getElementById("login").style.display='none';
    localStorage.setItem('ulogovaniKorisnik',ime);
    document.getElementById("imeUlogovanogKorisnika").innerHTML=ime;
    window.location.href = 'index.html';
}

function izlogujGa(){
    localStorage.removeItem('ulogovaniKorisnik');
    location.reload();
}

function proveraImena(user) {
    var korisnici=sviKorisnici();
    for(var index=0;index<korisnici.length;index++){
        var korisnik=korisnici[index];
        if(user==korisnik.user){
            return korisnik;
        }
    }
    return false;
}