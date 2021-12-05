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

je.addEventListener('click', function d(){
    jakie_litery = ile_liter[0]
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
dw.addEventListener('click', function d(){
    jakie_litery = ile_liter[1]
    losowanie_liter(jakie_litery)
    removeBtn()
})
trz.addEventListener('click', function d(){
  
    jakie_litery = ile_liter[2]
    losowanie_liter(jakie_litery)
    removeBtn()
})
czt.addEventListener('click', function d(){
    jakie_litery = ile_liter[3]
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
pie.addEventListener('click', function d(){
    jakie_litery = ile_liter[4]
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
sze.addEventListener('click', function d(){
    jakie_litery = ile_liter[5]
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
si.addEventListener('click', function d(){
    jakie_litery = ile_liter[6]
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
os.addEventListener('click', function d(){
    jakie_litery = ile_liter[7]
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
dz.addEventListener('click', function d(){
    jakie_litery = ile_liter[8]
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
dzi.addEventListener('click', function d(){
    jakie_litery = ile_liter[9]
    losowanie_liter(jakie_litery)
    removeBtn()
    
})
jed.addEventListener('click', function d(){
    jakie_litery = ile_liter[10]
    losowanie_liter(jakie_litery)
    removeBtn()
    
})

function removeBtn(){
    for(i = 0; i < 11; i++){
        document.querySelectorAll("button")[i].style.display = 'none'
    }
    document.getElementsByClassName('prz')[0].style.display = "block"
    document.querySelector('nav').style.borderRight = "#433E3E"
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
        let srednia = w/59
        document.querySelector('.super').innerHTML = "Czas: " + w + " sekund<br>Tempo: " + Math.floor(srednia * 60) + " klawiszy na minute" 
        document.querySelector(".super").style.color = "white"
        document.querySelector(".super").style.fontSize = "30px"
    }
   ktory_znak++

})
 /*  
   if(ktory_znak == 60){
       kp[1] = Date.parse()
   }
   
    
   
})
 document.querySelector(".rzad_1wpis").addEventListener('keydown', function(){
     console.log(kp[0])
 })
 document.querySelectorAll(".prz")[0].addEventListener('click', function(){
     console.log(kp[1])
     console.log("wynik = " + (kp[1] - kp[0]))
 })
 


let koniec = kp[2]
console.log(koniec-poczatek)

let ktory_z = 60;
const tekst3 = document.querySelector(".rzad3_wpis")
tekst3.addEventListener('keydown', function(){
    let klawi = event.key
    let kasowanie = event.keyCode
   for(i = 60; i < 90; i++){
       console.log(znaki_wejsciowe[i])
   }
   
    if((kasowanie == 8)){
        
        blad = blad-1
        ktory_z-=2
        
    }
   
    if(klawi != znaki_wejsciowe[ktory_z]){
        blad++;
        document.querySelector(".bledy").innerHTML = "Błędy: " + blad;
        document.querySelector(".bledy").style.color = "white";
        document.querySelector(".bledy").style.fontSize = "30px";
        document.getElementsByClassName("super")[0].innerHTML = "kod znaku:" + kasowanie + " Jaki znak: " + ktory_z + " Wyjscie: " + znaki_wejsciowe[ktory_z] + " Uzytkownik: " + klawi;
      
    }
   ktory_z++
   if(jaki_znak < 60){
        jaki_znak = 60
    }
   
   
    
   
})
let ktory_zn = 90;
const tekst4 = document.querySelector(".rzad3_wpis")
tekst4.addEventListener('keydown', function(){
    let klawis = event.key
    let kasowanie = event.keyCode
   
   
    if((kasowanie == 8)){
        
        blad = blad-1
        ktory_zn-=2
        
    }
   
    if(klawis != znaki_wejsciowe[ktory_z]){
        blad++;
        document.querySelector(".bledy").innerHTML = "Błędy: " + blad;
        document.querySelector(".bledy").style.color = "white";
        document.querySelector(".bledy").style.fontSize = "30px";
        document.getElementsByClassName("super")[0].innerHTML = "kod znaku:" + kasowanie + " Jaki znak: " + ktory_zn + " Wyjscie: " + znaki_wejsciowe[ktory_zn] + " Uzytkownik: " + klawis;

      
    }
   ktory_zn++
   
   
    
   
})*/