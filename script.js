class Babu{

    constructor(nev,matrixhely,feher){
        this.nev=nev;
        this.matrixhely=matrixhely.split(';').map(Number);
        this.feher=feher;
        this.pont=this.pontPick();
        if (this.nev.includes("paraszt")) {
            this.utes=this.utesPick() 
        }
        this.move=this.movePick();
        this.kiutve=false;
        this.hely=document.querySelector("[data-babu="+"'"+nev+"'"+"]")
    }

    movePick(){
        let moveNums=new Array()
        switch (this.nev.slice(0,2)) {
            case "pa":
                for (let i = 1; i < 4; i++) {
                    this.feher ? 
                    moveNums.push(this.matrixhely[0]+i+";"+this.matrixhely[1]) 
                    : moveNums.push(this.matrixhely[0]-i+";"+this.matrixhely[1])
                }
                return moveNums;
            case "ba" :
                for (let i = 1; i < 13; i++) {
                    moveNums.push(this.matrixhely[0]+i+";"+this.matrixhely[1]) 
                    moveNums.push(this.matrixhely[0]-i+";"+this.matrixhely[1]) 
                    moveNums.push(this.matrixhely[0]+";"+(this.matrixhely[1]+Number(i))) 
                    moveNums.push(this.matrixhely[0]+";"+(this.matrixhely[1]-Number(i))) 
                }
                return moveNums;
            case "kk" :
                for (let i = 1; i < 3; i++) {
                    moveNums.push(this.matrixhely[0]+i+";"+this.matrixhely[1]) 
                    moveNums.push(this.matrixhely[0]-i+";"+this.matrixhely[1])
                    moveNums.push(this.matrixhely[0]+";"+(this.matrixhely[1]+Number(i))) 
                    moveNums.push(this.matrixhely[0]+";"+(this.matrixhely[1]-Number(i))) 
                    //atlok
                    moveNums.push(this.matrixhely[0]-i+";"+(this.matrixhely[1]+Number(i))) 
                    moveNums.push(this.matrixhely[0]+i+";"+(this.matrixhely[1]-Number(i)))
                    moveNums.push(this.matrixhely[0]-i+";"+(this.matrixhely[1]-Number(i))) 
                    moveNums.push(this.matrixhely[0]+i+";"+(this.matrixhely[1]+Number(i)))
                }
                return moveNums;
            case "ki":
                for (let i = 1; i < 13; i++) {
                    moveNums.push(this.matrixhely[0]+i+";"+this.matrixhely[1]) 
                    moveNums.push(this.matrixhely[0]-i+";"+this.matrixhely[1])
                    moveNums.push(this.matrixhely[0]+";"+(this.matrixhely[1]+Number(i))) 
                    moveNums.push(this.matrixhely[0]+";"+(this.matrixhely[1]-Number(i))) 
                    //atlok
                    moveNums.push(this.matrixhely[0]-i+";"+(this.matrixhely[1]+Number(i))) 
                    moveNums.push(this.matrixhely[0]+i+";"+(this.matrixhely[1]-Number(i)))
                    moveNums.push(this.matrixhely[0]-i+";"+(this.matrixhely[1]-Number(i))) 
                    moveNums.push(this.matrixhely[0]+i+";"+(this.matrixhely[1]+Number(i)))
                }
                return moveNums;
            case "fu" :
                for (let i = 1; i < 13; i++) {
                    moveNums.push(this.matrixhely[0]-i+";"+(this.matrixhely[1]+Number(i))) 
                    moveNums.push(this.matrixhely[0]+i+";"+(this.matrixhely[1]-Number(i)))
                    moveNums.push(this.matrixhely[0]-i+";"+(this.matrixhely[1]-Number(i))) 
                    moveNums.push(this.matrixhely[0]+i+";"+(this.matrixhely[1]+Number(i)))
                }
                return moveNums;
            case "lo" :
                moveNums.push(this.matrixhely[0]+2+";"+(this.matrixhely[1]-Number(1)))
                moveNums.push(this.matrixhely[0]+2+";"+(this.matrixhely[1]+Number(1))) 
                moveNums.push(this.matrixhely[0]-2+";"+(this.matrixhely[1]-Number(1))) 
                moveNums.push(this.matrixhely[0]-2+";"+(this.matrixhely[1]+Number(1))) 

                moveNums.push(this.matrixhely[0]+1+";"+(this.matrixhely[1]-Number(2))) 
                moveNums.push(this.matrixhely[0]+1+";"+(this.matrixhely[1]+Number(2))) 
                moveNums.push(this.matrixhely[0]-1+";"+(this.matrixhely[1]-Number(2))) 
                moveNums.push(this.matrixhely[0]-1+";"+(this.matrixhely[1]+Number(2))) 
                return moveNums;
            default:
                return "valami nemjo";
        }
    }

    utesPick(){
        let utesNums=new Array()
        this.feher ? 
        utesNums.push(this.matrixhely[0]+1+";"+(this.matrixhely[1]-1)+";"+(this.matrixhely[1]+1)) 
        : utesNums.push(this.matrixhely[0]-1+";"+(this.matrixhely[1]-1)+";"+(this.matrixhely[1]+1))
        return utesNums;
    }

    pontPick(){
     
        switch (this.nev.slice(0,2)) {
            case "pa":
                return 1;
            case "ba" :
                return 3;
            case "kk" :
                return 2;
            case "ki":
                return 5;
            case "fu" :
                return 2;
            case "lo" :
                return 2;
            default:
                return "valami nemjo";
        }
    }
}

var sakktabla = document.getElementById("tabla");
var aktkep = null;
var korszamlalo = 1;
var korLimit=document.getElementById("round").value;
var feherpont=0;
var feketepont=0;
var matrix=new Array();
var babuMap=new Map();
var allowedMoves=new Array();
var allowedHits=new Array();
var hitelhetok = new Array(); 

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
        document.getElementById(i).innerHTML="<img data-babu=paraszt"+i+" src = 'kepek/paraszt.png'></img>"
        document.getElementById(i+72).innerHTML="<img data-babu=paraszt"+(i+72)+" src = 'kepek/paraszt.png' class = 'fekete'></img>"
    }

    //kiraly atnevezve mert kell classba
    let babuk=["bastya", "lo", "futo", "kkraly", "kiralyno"]

    for (let i = 0; i < 4; i++) {
        document.getElementById(i).innerHTML="<img data-babu="+babuk[i]+""+i+" src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById(7-i).innerHTML="<img data-babu="+babuk[i]+""+(7-i)+" src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById(i+88).innerHTML="<img data-babu="+babuk[i]+""+(i+88)+" src = 'kepek/"+babuk[i]+".png' class = 'fekete'></img>"
        document.getElementById((7-i)+88).innerHTML="<img data-babu="+babuk[i]+""+((7-i)+88)+" src = 'kepek/"+babuk[i]+".png' class = 'fekete'></img>"
    }
    for (let i = 3; i < 5; i++) {
        document.getElementById(i).innerHTML="<img data-babu="+babuk[i]+""+i+" src = 'kepek/"+babuk[i]+".png'></img>"
        document.getElementById(i+88).innerHTML="<img data-babu="+babuk[i]+""+(i+88)+" src = 'kepek/"+babuk[i]+".png' class = 'fekete'></img>"
    }
    //amugy ez a function atlathato nyugi
}

function kiszedes(ez){
    if(aktkep===null){
        aktkep = ez.children[0];
        ez.children[0].remove()
        moveHighlight()
        if(aktkep.dataset["babu"].includes("paraszt"))
        hitHighlight();
    }
}

function moveHighlight() {
    for (const kocka of babuMap.get(aktkep.dataset["babu"]).move) {
        let temp = kocka.split(';').map(Number);
        console.log(temp);
    
        if (!(Math.min(...temp) < 0) && temp[1] < 8 && temp[0] < 12) {
            console.log("bement");
            try {
                var id = matrix[temp[0]][temp[1]];
                let curr = document.getElementById(id);
                curr.innerText = "⬤";
                curr.style.color = "green";
                allowedMoves.push(id);
            } catch (error) {
                if (babuMap.get(aktkep.dataset['babu']).feher !== id.feher) {
                    hitelhetok.push(id);
                    console.log(document.querySelector("td:first-child[data-babu=" + id.nev + "]"));
                    let query = document.querySelector("[data-babu=" + id.nev + "]").parentNode;
                    query.setAttribute("onclick", "berakas(this)");
                    query.innerHTML += "⬤";
                    query.style.color = "red";
                    allowedMoves.push(Number(query.id));
                    return;
                }

            }
        }
    }
   
}

function hitHighlight() {
    babuMap.get(aktkep.dataset["babu"]).utes.forEach(kocka => {
        let temp=kocka.split(';')
        let idk=[matrix[temp[0]][temp[1]],matrix[temp[0]][temp[2]]]
        idk.forEach(id => {
            try {
                let curr=document.getElementById(id)
                curr.innerText="⬤"
                curr.style.color="red"
                allowedHits.push(id)
            } catch (error){
                console.log("utkozesparaszt");
            }
        });

    });
}

function attributeSetter() {
    Array.from(document.getElementsByTagName("td")).forEach(td => {
        if (td.children.length==1) {
            td.setAttribute("onclick","kiszedes(this)")
        }
        else if(td.children.length==0){
            td.setAttribute("onclick","berakas(this)")
        }
    });

}

function resetter() {
    allowedMoves.concat(allowedHits).forEach(move => {
        let curr= document.getElementById(move)
        // if (!curr.children.length>0) {
        //     curr.firstChild.remove()
        //     curr.style.color=""
        // }
        if (curr.childNodes[0].data=="⬤") {
            curr.firstChild.remove()
            curr.style.color=""
        }
        else if(curr.childNodes[1].data=="⬤"){
            curr.lastChild.remove()
            curr.style.color=""
        }
    });
    aktkep=null;
    matrix=[]
    hitelhetok=[]
    allowedMoves=[]
    allowedHits=[]
}


function berakas(ez){
    console.log("dwamdwanjjoi");
    console.log(allowedMoves);
    
    if(aktkep!=null && allowedMoves.includes(Number(ez.id))){
        ez.innerHTML="";
        ez.appendChild(aktkep)
        resetter();
        whichfordulsmagyarulkorLefutas();

    }
}

function babuMatrixGen(){
    let fostos=new Array();
    for (let i = 0; i < 96; i++) {
        try {
            let curr=document.getElementById(i).firstChild
            let babu=new Babu(curr.dataset["babu"],Math.floor(i/8)+";"+i%8,curr.classList.length > 0 ? false : true)
            fostos.push(babu)
            babuMap.set(babu.nev,babu)
        } catch (error) {
            console.log("null dog");
            fostos.push(i)
        }

        if ((i+1)%8==0) {
            matrix.push(fostos)
            fostos=[]
        }
    }
    console.log(matrix);
}

function whichfordulsmagyarulkorLefutas(){
    babuMatrixGen()
    attributeSetter()
    console.log("limit: "+korLimit);
    console.log(korszamlalo);
    if(korszamlalo%2!=0){
        console.log("feher kor");
        Array.from(document.getElementsByTagName("td")).forEach(td => {
            if(td.innerHTML.includes("fekete") && !td.innerHTML==""){
                td.removeAttribute("onclick");
            }
        });
       korszamlalo++
       PontUpdateWinCheck()
    }

    else if(korszamlalo%2==0){
        console.log("fekete kor");
        Array.from(document.getElementsByTagName("td")).forEach(td => {
            if(!td.innerHTML.includes("fekete") && !td.innerHTML==""){
                td.removeAttribute("onclick");
            }
        });
        korszamlalo++;
        PontUpdateWinCheck()
    }
}

function PontUpdateWinCheck() {
    document.getElementById("feherpont").innerHTML="Feher pontszámai: "+feherpont
    document.getElementById("feketepont").innerHTML="Fekete pontszámai: "+feketepont
}

function main(){
    gen();
    babulerakas();
    whichfordulsmagyarulkorLefutas();
}