let alfabet_prawa = ['j','k','l',';','u','i','.','h','y','m','n','p','f','d','s','a','e','r','w','g','t','c','z','b']
//let alfabet_lewa = ['f','d','s','a','e','r','w','g','t','c','z','b']
let znaki_wejsciowe = new Array()
let liczba  = 0;
let kp = new Array()
let jakie_litery = 1
ile_liter = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
const je = document.getElementById('jeden')
const dw = document.getElementById('dwa')
const trz = document.getElementById('trzy')
const czt = document.getElementById('cztery')
const pie = document.getElementById('piec')
const sze = document.getElementById('szesc')
const si = document.getElementById('siedem')
const os = document.getElementById('osiem')
const dz = document.getElementById('dziewiec')
const dzi = document.getElementById('dziesiec')
const jed = document.getElementById('jedenascie')
const main = document.querySelector('main')

je.addEventListener('click', function d(){
    jakie_litery = ile_liter[0]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
dw.addEventListener('click', function d(){
    jakie_litery = ile_liter[1]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
})
trz.addEventListener('click', function d(){
  
    jakie_litery = ile_liter[2]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
})
czt.addEventListener('click', function d(){
    jakie_litery = ile_liter[3]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
pie.addEventListener('click', function d(){
    jakie_litery = ile_liter[4]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
sze.addEventListener('click', function d(){
    jakie_litery = ile_liter[5]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
si.addEventListener('click', function d(){
    jakie_litery = ile_liter[6]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
os.addEventListener('click', function d(){
    jakie_litery = ile_liter[7]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
dz.addEventListener('click', function d(){
    jakie_litery = ile_liter[8]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
dzi.addEventListener('click', function d(){
    jakie_litery = ile_liter[9]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
jed.addEventListener('click', function d(){
    jakie_litery = ile_liter[10]
    main.style.display = "inline-block";
    losowanie_liter(jakie_litery)
    removeBtn()
    
})

function removeBtn(){
    for(i = 0; i < 11; i++){
        document.querySelectorAll("button")[i].style.display = 'none'
    }
    document.getElementsByClassName('prz')[0].style.display = "block"
    document.querySelector('nav').style.borderRight = "#433E3E"
    document.querySelector('.prz').style.backgroundColor = "#C4C4C4";
    document.querySelector('.prz').style.marginLeft= "auto";
    document.querySelector('.prz').style.marginRight = "auto";
    document.querySelector('.prz').style.borderRadius = "15px";

    //document.getElementsByClassName('prz')[1].style.display = "block" 
}

function losowanie_liter(ile_liter){
    for(k = 0 ; k < 2; k++){
        
        for(j = 0; j < 5; j++){
            
            const el = document.createElement("div")
            el.classList.add("element")
            el.style.fontSize = "40px"
            el.style.display = "inline-block"
            el.style.padding = "25px"
            for(i = 0; i < 5; i++){
                let literka = Math.floor(Math.random()*ile_liter + 0)
                litera = alfabet_prawa[literka]
                el.innerText +=  litera
                znaki_wejsciowe[liczba] = litera
                liczba ++
            }
            if(j != 5)
                znaki_wejsciowe[liczba] = " "
            liczba++
            const d = document.getElementsByClassName("s1")[k]
            d.appendChild(el)
           
        }
        znaki_wejsciowe[liczba] = "Tab"
    }
    
}


let poczatek = 0;
let jaki_znak = 0
let blad = 0;


const tekst1 = document.querySelector(".rzad1_wpis")
tekst1.addEventListener('keydown', function(){
    let klawisz = event.key
    let kasowanie = event.keyCode
   
   if(jaki_znak == 1){
       
       poczatek = new Date
       console.log(poczatek)
   }
    if(kasowanie == 8){
         
        blad = blad-1
        jaki_znak -=2
        
    }
    if(kasowanie == 9){
        blad--
        jaki_znak--
    }
   
    if(klawisz != znaki_wejsciowe[jaki_znak]){
        blad++;
        document.querySelector(".bledy").innerHTML = "Błędy: " + blad;
        document.querySelector(".bledy").style.color = "white";
        document.querySelector(".bledy").style.fontSize = "30px";
    }
    if(jaki_znak <= 0){
        jaki_znak = 0
    }
    jaki_znak++
   // document.getElementsByClassName("super")[0].innerHTML = "kod znaku:" + kasowanie + " Jaki znak: " + jaki_znak + " Wyjscie: " + znaki_wejsciowe[jaki_znak] + " Uzytkownik: " + klawisz;
})
// poczatek = kp[0]
// console.log("Poczatek = " + poczatek)

let koniec = 0
let ktory_znak = 30;
const tekst2 = document.querySelector(".rzad2_wpis")
tekst2.addEventListener('keydown', function(){
    let klaw = event.key
    let kasowanie = event.keyCode
   
   
    if((kasowanie == 8)){
        
        blad = blad-1
        ktory_znak-=2
        
    }
    if(kasowanie == 9){
        blad--
        ktory_znak--
    }
    if(kasowanie == 13){
        blad--
    }
   
    if(klaw != znaki_wejsciowe[ktory_znak]){
        blad++;
        document.querySelector(".bledy").innerHTML = "Błędy: " + blad;
        document.querySelector(".bledy").style.color = "white";
        document.querySelector(".bledy").style.fontSize = "30px";
       //document.getElementsByClassName("super")[0].innerHTML = "kod znaku:" + kasowanie + " Jaki znak: " + ktory_znak + " Wyjscie: " + znaki_wejsciowe[ktory_znak] + " Uzytkownik: " + klaw;
    }
    if(ktory_znak < 30){
        ktory_znak = 30
    }
   
    if(ktory_znak == 59){
        koniec = new Date
        console.log(koniec)
        let w = (koniec.getTime() - poczatek.getTime())/1000
        console.log(w)
        let srednia = 59/w
        document.querySelector('.super').innerHTML = "Czas: " + w + " sekund<br>Tempo: " + Math.floor(srednia * 60) + " klawiszy na minutę"
        if(localStorage.length != 0){
            let poprzedni = ParseFloat(localStorage.getItem('wynik'))
            let pg = poprzedni - w;
            if(pg == 0){
                document.querySelector('.st').innerHTML = "Twój wynik jest taki sam jak poprzednio!";
            }
            if(pg > 0){
                document.querySelector('.st').innerHTML = "Twój wynik jest gorszy od poprzedniego";
            }
            else{
                document.querySelector('.st').innerHTML = "Twój wynik jest lepszy od poprzedniego"
            }
            localStorage.removeItem('wynik')
            localStorage.setItem('wynik', w)
            console.log(localStorage.getItem("wynik"))
        }
        
        
        document.querySelector(".super").style.color = "white"
        document.querySelector(".super").style.fontSize = "30px"
    }
   ktory_znak++

})
