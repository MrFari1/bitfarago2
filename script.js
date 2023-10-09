var sakktabla = document.getElementById("tabla");
var aktkep = document.createElement("img");

function gen(){
    let k = 0;
    for (let i = 0; i < 12; i++) {
        let tr=document.createElement("tr")
        if(i>=10){
            tr.classList+="fekete"
        }
        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td")
            td.style.width = "50px";
            td.style.height = "50px";
            td.id = Number(k)
            td.setAttribute("onclick","kiszedes(this)");
            //td.setAttribute("onclick","berakas()");
            tr.appendChild(td)
            k++;
        }
        sakktabla.appendChild(tr)
    }
}

function babulerakas(){
    for (let i = 8; i < 16; i++) {
        let kep = document.createElement("img");
        kep.src = "kepek/paraszt.png";
        document.getElementById(i).appendChild(kep);
    }
    for (let i = 80; i < 88; i++) {
        let kep = document.createElement("img");
        kep.src = "kepek/paraszt.png";
        document.getElementById(i).appendChild(kep);
    }
    document.getElementById(0).innerHTML="<img src = 'kepek/bastya.png'></img>";
    document.getElementById(7).innerHTML="<img src = 'kepek/bastya.png'></img>";
    document.getElementById(88).innerHTML="<img src = 'kepek/bastya.png'></img>";
    document.getElementById(95).innerHTML="<img src = 'kepek/bastya.png'></img>";
    document.getElementById(1).innerHTML="<img src = 'kepek/lo.png'></img>";
    document.getElementById(6).innerHTML="<img src = 'kepek/lo.png'></img>";
    document.getElementById(89).innerHTML="<img src = 'kepek/lo.png'></img>";
    document.getElementById(94).innerHTML="<img src = 'kepek/lo.png'></img>";
    document.getElementById(2).innerHTML="<img src = 'kepek/futo.png'></img>";
    document.getElementById(5).innerHTML="<img src = 'kepek/futo.png'></img>";
    document.getElementById(90).innerHTML="<img src = 'kepek/futo.png'></img>";
    document.getElementById(93).innerHTML="<img src = 'kepek/futo.png'></img>";
    document.getElementById(3).innerHTML="<img src = 'kepek/kiralyno.png'></img>";
    document.getElementById(91).innerHTML="<img src = 'kepek/kiralyno.png'></img>";
    document.getElementById(4).innerHTML="<img src = 'kepek/kiraly.png'></img>";
    document.getElementById(92).innerHTML="<img src = 'kepek/kiraly.png'></img>";
}

function kiszedes(vakond){
    if(vakond.innerHTML!=""){
        console.log("szia"); 
        aktkep = vakond.innerHTML;
        vakond.innerHTML = "";
        console.log(aktkep);
        aktid = vakond.id;
        console.log(aktid);
    }
    if(vakond.innerHTML==""){
        berakas(vakond.id)
    }

}
function berakas(aktid){
    if(document.getElementById(aktid).innerHTML == ""){
        document.getElementById(aktid).innerHTML = aktkep;    
        console.log("jo lesz");
        aktid = 0;
        aktkep=""
    }
}

gen();
babulerakas();
