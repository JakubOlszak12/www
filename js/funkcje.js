function oblicze(){
var l1=document.getElementById('l1');
l1=l1.value;
l1=parseInt(l1);
var l2=parseInt(document.getElementById('l2').value);
var s=document.getElementById('suma');
s.value=l1+l2;
}

function obliczenia(){
    var kwota = parseFloat(document.getElementById("kwota").value);
    var raty = parseFloat(document.getElementById("raty").value);
    var proc = parseFloat(document.getElementById("proc").value);
    proc=proc/100;
    var procm = proc/12;
    var mian = 1+procm;
    var wynik = (kwota*procm)/(1-(1/mian)**raty);
    document.getElementById("miesiac").value=wynik.toFixed(2);
    document.getElementById("odsetki").value=(document.getElementById("miesiac").value*raty).toFixed(2);
    
}
function oblicz(){
    var tab = document.getElementsByName("operator");
    var op;
    for(let i=0;i<tab.length;i++){
        if(tab[i].checked) op = tab[i].value;
    }
    var wynik = document.getElementById("wynik");
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);
    switch(op){
        case "+":
            wynik.value=x+y;
            break;
        case "-":
            wynik.value=x-y;
            break;
        case "*":
            wynik.value=x*y;
            break;
        case "/":
            if(y===0){
                wynik.value="Dzielenie przez 0!";
                break;
            }
            else 
            wynik.value=x/y;
            break;
        default:
            wynik.value="Radio button not checked";   
        }
}

function pokaz(id)
{
 var tresc="";
 switch (id)
 { case 2: tresc += pokazGalerie();break;
 case 3: tresc += pokazPost(); break;
 case 4: tresc += pokazKontakt();break;
 default: tresc += pokazO();
 }
 //pobierz element o wskazanym id i ustaw jego nową zawartość:
 document.getElementById('blok').innerHTML = tresc;
}
function pokazO(){
 var tresc ='<h2><br />Pierwsze kroki</h2> ';
 //operator += uzupełnia łańcuch kolejną porcją znaków:
 tresc += '<p>  Projektowanie responsywne (RWD od ang. Responsive Web Design) to metoda, która dostosowuje się do środowiska wyświetlania.'+
 'Użytkownik może swobodnie poruszać się po  stronach internetowych korzystając z różnych urządzeń, także mobilnych. Rozmiar strony, jej'+
 'rozdzielczość oraz orientaja ekranu dopasowują się do urządzenia, na którym aktualnie jest wyświetlana.</p>'+
 '<p class="srodek"><img src="zdjecia/baner.jpg" alt="Zdjęcie" /></p>'+
 '<article><h2>Wady SPA</h2><p>'+
 ' Czas wytworzenia oraz nakład pracy włożony w stworzenie aplikacji jest większy, co wiąże ze sobą dodatkowe koszta,'+ 
 'dlatego tworzenie małych stron jest nieopłacalne - efekt dla strony z jedną zakładką jest niezauważalny.'+
 'Pozycjonowanie stron wymaga większego nakładu pracy. Obecnie roboty indeksujące Google nie radzą sobie ze stronami tego typu,'+ 
 'co wiąze się z koniecznością tworzenia rozwiązań przystosowanych dla robotów. </p></article>';
 //przekaż wynik – gotową zawartość – do miejsca wywołania funkcji:
 return tresc;
}

function pokazGalerie()
{
 var tresc='<h2><br />Moja galeria</h2>';
 tresc+=' <div class="galeria">';
 //wygeneruj kod HTML z obrazami za pomocą pętli for:
 for(let i=1;i<=10;i++)
 {
 tresc+='<div class="slajd"> <a href="zdjecia/zdjecia/obraz'+i+'.JPG" target="_blank"><img src="zdjecia/miniaturki/obraz'+i+'.JPG" alt="img'+i+'"></a></div>';
 }
 return tresc+'</div>';
}
function pokazKontakt()
{
 var tresc='<h2><br />Kontakt</h2>';
tresc+='<center><p>Numer telefonu: 555532214</br>email: jakub.olszak@pollub.edu.pl</p></center>'
 return tresc;
}
function pokazPost()
{
 //funkcja generuje kod formularza – dane wpisane w odpowiednie pola przez
 //użytkownika zostaną przekazane mailem na wskazany adres, ale najpierw po
 //zajściu zdarzenia submit (wyślij) – zostanie wywołana funkcja pokazDane()
 tresc='<h2><br />Dodaj post</h2>';

 tresc+='<article class="srodek" ><form action="mailto:j.jakub66@gmail.com" method="post" onsubmit="return pokazDane();">'+
  //utworzenie input email
    '<table>'+
 '<tr> <td>Twój email:</td><td><input type="email" name="email" id="email" required /></td>'+
 // utworzenie input Imię i nazwisko
 'Nazwisko i imię:<br /> <input type="text" name="name" id="name" required<br/><br />'+ 
 //utworzenie input Telefon
 'Telefon:<br /> <input type="number" name="number" id="number" required<br/><br />'+ 
 //utworzenie checkboxow zainteresowania
 '<br />Zainteresowania:<br /> <input type="checkbox" name="zainteresowania" value="Sport">Sport'+ 
 '<input type="checkbox" name="zainteresowania" value="Muzyka">Muzyka'+ 
 '<input type="checkbox" name="zainteresowania" value="Film">Film'+ 
 '<input type="checkbox" name="zainteresowania" value="Inne">Inne<br/>'+
 //utworzenie radio button wiek
 '<br />Wiek:<br /> <input type="radio" name="Wiek" value="Mniej niz 10" required>Mniej niz 10'+ 
 '<input type="radio" name="Wiek" value="10-20" required>10-20'+ 
 '<input type="radio" name="Wiek" value="21-30" required>21-30'+ 
 '<input type="radio" name="Wiek" value="31-40" required>31-40'+ 
 '<input type="radio" name="Wiek" value="41-50" required>41-50'+ 
 '<input type="radio" name="Wiek" value="Więcej niż 50" required>Więcej niż 50'+ 
 // utworzenie textarea komentarz
 '<br /><br />Komentarz: <br /><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea>'+
 '<br /> <input type="submit" name="wyslij" value="Wyślij" />'+'</form></article>';
 return tresc;
}   
function pokazDane()
{
 //Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
 //typu confirm do zatwierdzenia przez użytkownika:
 var dane="Następujące dane zostaną wysłane:\n";
 dane+="Email: "+document.getElementById('email').value+"\n";
 dane+="Imię i Nazwisko: "+document.getElementById('name').value+"\n";
 dane+="Telefon: "+document.getElementById('number').value+"\n";   
 dane+="Zainteresowania: ";
 var tab = document.getElementsByName("zainteresowania");
 for(let i=0;i<tab.length;i++){
     if(tab[i].checked){ 
     dane+=tab[i].value+" ";
     }
 }
 dane+="\n"+"Wiek: ";
 tab=document.getElementsByName("Wiek");
 for(let i=0;i<tab.length;i++){
    if(tab[i].checked){ 
    dane+=tab[i].value+" ";
    }
}
dane+="\n"+"Komentarz: "+document.getElementById("wiadomosc").value;
 // uzupełnij dane ...
 if (window.confirm(dane)) return true;
 else return false;
}
