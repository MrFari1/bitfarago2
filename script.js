var sakktabla = document.getElementById("tabla");
var aktkep = ""

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

    let babuk=["bastya", "lo", "futo", "kiraly", "kiralyno"]
    for (let i = 0; i < 4; i++) {
        document.getElementById(i).innerHTML="<img src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById(7-i).innerHTML="<img src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById(i+88).innerHTML="<img src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById((7-i)+88).innerHTML="<img src = 'kepek/"+babuk[i]+".png'></img>"
    }
    for (let i = 3; i < 5; i++) {
        document.getElementById(i).innerHTML="<img src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById(i+88).innerHTML="<img src = 'kepek/"+babuk[i]+".png'></img>"
    }
}

function kiszedes(vakond){
    if(vakond.innerHTML!=""){
        console.log("babu");
        aktkep = vakond.innerHTML;
        vakond.innerHTML = "";
    }
    if(vakond.innerHTML==""){
        console.log("ures");
        berakas(vakond.id)
    }

}

function berakas(aktid){
    if(document.getElementById(aktid).innerHTML == ""){
        document.getElementById(aktid).innerHTML = aktkep;    
        aktkep=""
    }
}

gen();
babulerakas();
