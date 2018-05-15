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