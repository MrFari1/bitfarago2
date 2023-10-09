var sakktabla = document.getElementById("tabla");
var aktkep = "";
var korszamlalo = 0;
var kor=document.getElementById("round").value;
var feherpont=0;
var feketepont=0;

function gen(){
    let k = 0;
    for (let i = 0; i < 12; i++) {
        let tr=document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td")
            td.style.width = "60px";
            td.style.height = "60px";
            td.id = Number(k)
            tr.appendChild(td)
            k++;
        }
        sakktabla.appendChild(tr)
    }
}

function babulerakas(){
    for (let i = 8; i < 16; i++) {
        document.getElementById(i).innerHTML="<img src = 'kepek/paraszt.png'></img>"
        document.getElementById(i+72).innerHTML="<img src = 'kepek/paraszt.png' class = 'fekete'></img>"
    }

    let babuk=["bastya", "lo", "futo", "kiraly", "kiralyno"]

    for (let i = 0; i < 4; i++) {
        document.getElementById(i).innerHTML="<img src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById(7-i).innerHTML="<img src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById(i+88).innerHTML="<img src = 'kepek/"+babuk[i]+".png' class = 'fekete'></img>"
        document.getElementById((7-i)+88).innerHTML="<img src = 'kepek/"+babuk[i]+".png' class = 'fekete'></img>"
    }
    for (let i = 3; i < 5; i++) {
        document.getElementById(i).innerHTML="<img src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById(i+88).innerHTML="<img src = 'kepek/"+babuk[i]+".png' class = 'fekete'></img>"
    }
}

function kiszedes(td){
    if(td.innerHTML!="" && aktkep==""){
        aktkep = td.innerHTML;
        td.innerHTML = "";
    }
}

function berakas(td){
    if(td.innerHTML == "" && aktkep!=""){
        td.innerHTML = aktkep;    
        aktkep=""
    }
    vanbabu();
}

function vanbabu(){
    for (let i = 0; i < 96; i++) {
        document.getElementById(i).innerHTML=="" ? document.getElementById(i).setAttribute("onclick","berakas(this)") : document.getElementById(i).setAttribute("onclick","kiszedes(this)")
    }
    whichforduls();
}

function whichforduls(){
    console.log(kor);
    console.log(korszamlalo);
    if(korszamlalo%2==0){
        console.log("feher kor");
        for (let i = 0; i < 96; i++) {
            if(document.getElementById(i).innerHTML.includes("fekete") && !document.getElementById(i).innerHTML==""){;
                document.getElementById(i).removeAttribute("onclick");
            }
        }
       korszamlalo++
       PontUpdateWinCheck()
    }

    else if(korszamlalo%2!=0){
        console.log("fekete kor");
        for (let i = 0; i < 96; i++) {
            if(!document.getElementById(i).innerHTML.includes("fekete") && !document.getElementById(i).innerHTML==""){
                document.getElementById(i).removeAttribute("onclick");
            }
        }
        korszamlalo++;
        PontUpdateWinCheck()
    }
}

function PontUpdateWinCheck() {
    console.log("dsadas");
    document.getElementById("feherpont").innerHTML="Feher pontszámai: "+feherpont
    document.getElementById("feketepont").innerHTML="Fekete pontszámai: "+feketepont
}

function main(){
    gen();
    babulerakas();
    vanbabu();
    PontUpdateWinCheck()
}