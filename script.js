var sakktabla = document.getElementById("tabla");
var aktkep = "";
var korszamlalo = 0;
var kor;

function getkor(){
    kor = document.getElementById("round").value;
}


function gen(){
    let k = 0;
    for (let i = 0; i < 12; i++) {
        let tr=document.createElement("tr");
        for (let j = 0; j < 8; j++) {
            let td = document.createElement("td")
            td.style.width = "50px";
            td.style.height = "50px";
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

function vanbabu(){
    for (let i = 0; i < 96; i++) {
        //console.log(document.getElementById(i));
        document.getElementById(i).innerHTML==""?document.getElementById(i).setAttribute("onclick","berakas(this)"):document.getElementById(i).setAttribute("onclick","kiszedes(this)")
    }
    whichforduls();
}

function kiszedes(td){
    if(td.innerHTML!="" && aktkep==""){
        console.log("babu");
        aktkep = td.innerHTML;
        td.innerHTML = "";
    }
    console.log(aktkep);
}

function berakas(td){
    if(td.innerHTML == "" && aktkep!=""){
        td.innerHTML = aktkep;    
        aktkep=""
    }
    vanbabu();
    korszamlalo++;
}

function whichforduls(){
    console.log(kor);
    console.log(korszamlalo);
    if(korszamlalo%2==0){
        console.log("feher kor");
        for (let i = 0; i < 96; i++) {
            if(document.getElementById(i).innerHTML.includes("fekete") &&!document.getElementById(i).innerHTML==""){;
                document.getElementById(i).removeAttribute("onclick");
            }
        }
        for (let j = 0; j < 96; j++) {
            if(!document.getElementById(j).innerHTML.includes("fekete"))
                document.getElementById(j).setAttribute("onclick","kiszedes(this)");
        }
    }
    else if(korszamlalo%2!=0){
        console.log("fekete kor");
        for (let i = 0; i < 96; i++) {
            if(!document.getElementById(i).innerHTML.includes("fekete") && !document.getElementById(i).innerHTML==""){
                document.getElementById(i).removeAttribute("onclick");
            }
        }
        for (let i = 0; i < 96; i++) {
            if(document.getElementById(i).innerHTML.includes("fekete"))
                document.getElementById(i).setAttribute("onclick","kiszedes(this)");
        }
    }
    }

function main(){
    getkor();
    gen();
    babulerakas();
    vanbabu();
}
