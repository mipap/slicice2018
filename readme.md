Igrica evidencija albuma sa slicicama

U ovoj igrici je potrebno 
- da postoji tabela na koju ce se dodavati brojevi slicica koje fale 
- da postoji polje na kojem se broji koliko slicica fali, 
- da pise koliko ukupno ima slicica u albumu, eventualno ono sto cu da ubacim je da pise koliko kojoj reprezentaciji fali slicica.
- Postojace polje za upisivanje brojeva koji fale, brisanje brojeva i resetovanja na pocetne pozicije.

Metode:
- Dodavanje slicica(brojeva)
- Provera da li vec postoji upis slicice
- Izracunavanje koliko fali slicica
- Brisanje dobijene slicice
- resetovanje na pocetne pozicije

dodajSlicicu(brojSlicice,kolikoKomada){}
dodajSlicice(objekatSaSlicicama){} // {"1":5,"15":3} 
daLiPostoji(brojSlicice) { return Number;}
kolikoFaliSlicica(){}
izbrisiSlicicu(){}
isprazniAlbum(){}
prikaziDuplikate(){}
izbrisiDuplikate(){}
// više korisnika može da napravi naloge i da upoređuju svoj album sa tuđim da mogu da vide šta mogu da ponude ili dobiju, kad razmene da mogu da označe celu




slicice={
    italija:[1,2,3,4,5],
    engleska:[6,7,8,9,10],
};

slicice=[
    {zlatneSlicice:[1,2,3,4,5]},
    {stadioni:[1,2,3,4,5]},
    {italija:[1,2,3,4,5]},
];
//         1, 2,3,4,5,6,7,8
slicice=[0,1,0,1,1,1,1,0,1,0]

album={
    slicica1:{
        id:1,
        reprezentacija:'italija',
        tip:'stadion',
        imam:5
    }
}

// Log in stranica
// Lending stranica
-Header sa naslovom objasnjenjem i funkcijama za , dodavanje slicice, brisanje slicice, log out, duplikatima
-Middle podeljeno po sektorima za slicice, polja su crvene pozadine, kada se klikne pretvori se u zeleno i oduzme se iz grupe slicica koje nemamo.

green: rgba(0, 128, 0, .6);


function prikaziInformacije() {
    console.log(album.slicica10);
    document.getElementById("prikaz").innerHTML =
        '<p>' + 'imam: ' + album.slicica15["imam"] +
        '<br>tip: ' + album.slicica15["tip"] +
        '<br>reprezentacija: '+ album.slicica15["reprezentacija"] +'</p>';
}

document.getElementById("pic15").addEventListener("click", function () {
    console.log(album.slicica15);
    document.getElementById("pic15").innerHTML ='<p>'+
    'imam: ' + album.slicica15["imam"] +
    '<br>tip: ' + album.slicica15["tip"] +
    '<br>reprezentacija: '+ album.slicica15["reprezentacija"]+'</p>';
    
});

document.getElementById("slicica1").addEventListener("click", prikaziInformacije(album.slicica1,"pic1", "slicica1", album.slicica1["width"], album.slicica1["height"]),false);
document.getElementById("slicica2").addEventListener("click", prikaziInformacije(album.slicica2,"pic2", "slicica2", album.slicica2["width"], album.slicica2["height"]),false);
document.getElementById("slicica3").addEventListener("click", prikaziInformacije(album.slicica3, "pic3", "slicica3", album.slicica3["width"], album.slicica3["height"]),false);
document.getElementById("slicica4").addEventListener("click", prikaziInformacije(album.slicica4, "pic4", "slicica4", album.slicica4["width"], album.slicica4["height"]),false);
document.getElementById("slicica5").addEventListener("click", prikaziInformacije(album.slicica5, "pic5", "slicica5", album.slicica5["width"], album.slicica5["height"]),false);
document.getElementById("slicica6").addEventListener("click", prikaziInformacije(album.slicica6, "pic6", "slicica6", album.slicica6["width"], album.slicica6["height"]),false);
document.getElementById("slicica7").addEventListener("click", prikaziInformacije(album.slicica7, "pic7", "slicica7", album.slicica7["width"], album.slicica7["height"]),false);
document.getElementById("slicica8").addEventListener("click", prikaziInformacije(album.slicica8, "pic8", "slicica8", album.slicica8["width"], album.slicica8["height"]),false);
document.getElementById("slicica9").addEventListener("click", prikaziInformacije(album.slicica9, "pic9", "slicica9", album.slicica9["width"], album.slicica9["height"]),false);
document.getElementById("slicica10").addEventListener("click", prikaziInformacije(album.slicica10, "pic10", "slicica10", album.slicica10["width"], album.slicica10["height"]),false);
document.getElementById("slicica11").addEventListener("click", prikaziInformacije(album.slicica11, "pic11", "slicica11", album.slicica11["width"], album.slicica11["height"]),false);
document.getElementById("slicica12").addEventListener("click", prikaziInformacije(album.slicica12, "pic12", "slicica12", album.slicica12["width"], album.slicica12["height"]),false);
document.getElementById("slicica13").addEventListener("click", prikaziInformacije(album.slicica13, "pic13", "slicica13", album.slicica13["width"], album.slicica13["height"]),false);
document.getElementById("slicica14").addEventListener("click", prikaziInformacije(album.slicica14, "pic14", "slicica14", album.slicica14["width"], album.slicica14["height"]),false);
document.getElementById("slicica15").addEventListener("click", prikaziInformacije(album.slicica15, "pic15", "slicica15", album.slicica15["width"], album.slicica15["height"]),false);
document.getElementById("slicica16").addEventListener("click", prikaziInformacije(album.slicica16, "pic16", "slicica16", album.slicica16["width"], album.slicica16["height"]),false);
document.getElementById("slicica17").addEventListener("click", prikaziInformacije(album.slicica17, "pic17", "slicica17", album.slicica17["width"], album.slicica17["height"]),false);
document.getElementById("slicica18").addEventListener("click", prikaziInformacije(album.slicica18, "pic18", "slicica18", album.slicica18["width"], album.slicica18["height"]),false);
