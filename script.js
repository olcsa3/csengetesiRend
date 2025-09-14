window.onload = function(){

    const form = document.createElement("form"); 
    form.setAttribute("id", "formId");
    document.body.appendChild(form);

    const orakSzamaDiv = document.createElement("div");
    orakSzamaDiv.setAttribute("id", "orakSzamaDivId");
    form.appendChild(orakSzamaDiv);

    const oraBekeresLabel = document.createElement("label");
    oraBekeresLabel.setAttribute("for", "oraBekeresId");
    oraBekeresLabel.setAttribute("id", "oraBekeresLabelId");
    oraBekeresLabel.textContent = "Kérjük add meg, hány órád lesz!";
    orakSzamaDiv.appendChild(oraBekeresLabel);

    const br = document.createElement("br");
    orakSzamaDiv.appendChild(br);

    const oraBekeres = document.createElement("input");
    oraBekeres.setAttribute("type", "number");
    oraBekeres.setAttribute("id", "oraBekeresId");
    oraBekeres.setAttribute("onchange", "elsoOraGomb()");
    orakSzamaDiv.appendChild(oraBekeres);
}

const ertekLista = [];
const orakSzama = [];
const szunetekHossza = [];
let bekeresekVege = false;

function elsoOraGomb(){
    if(!document.getElementById("oraBekeresGombId")){
        const oraBekeresGomb = document.createElement("button");
        oraBekeresGomb.setAttribute("type", "button");
        oraBekeresGomb.setAttribute("id", "oraBekeresGombId");
        oraBekeresGomb.setAttribute("onclick", "elsoOra()");
        oraBekeresGomb.textContent = "Leadás";
        document.getElementById("orakSzamaDivId").appendChild(oraBekeresGomb);

        const br = document.createElement("br"); 
        document.getElementById("orakSzamaDivId").appendChild(br);
        const br2 = document.createElement("br"); 
        document.getElementById("orakSzamaDivId").appendChild(br2);
    }
}

function elsoOra(){
    if(document.getElementById("oraBekeresId").value > 10){
        alert("A legnagyobb megengedett óraszám 10!");
        return;
    }
    else if(document.getElementById("oraBekeresId").value < 1){
        alert("A legkisebb megadható óraszám 1!");
        return;
    }

    const oraSzam = document.getElementById("oraBekeresId").value;
    orakSzama.push(oraSzam);
    if(orakSzama.length > 1){
        orakSzama.pop();
    }

    document.getElementById("oraBekeresGombId").remove();

    const elsoInputSzoveg = document.createElement("label");  
    elsoInputSzoveg.setAttribute("for", "idoBekeres");
    elsoInputSzoveg.textContent = "Add meg az 1. órád kezdetét!";
    document.getElementById("orakSzamaDivId").appendChild(elsoInputSzoveg);

    const br = document.createElement("br"); 
    document.getElementById("orakSzamaDivId").appendChild(br);

    const elsoInput = document.createElement("input"); 
    elsoInput.setAttribute("type", "time");
    elsoInput.setAttribute("value", "00:00");
    elsoInput.setAttribute("id", "idoBekeres");
    elsoInput.setAttribute("onchange", "gombLetrehozas()");
    document.getElementById("orakSzamaDivId").appendChild(elsoInput);

    document.getElementById("oraBekeresId").disabled = true;
}

function gombLetrehozas(){
    elsoErtek = document.getElementById("idoBekeres").value;
    if(!document.getElementById("elsoGomb")){
        const kezdesIdejeBtn = document.createElement("button"); 
        kezdesIdejeBtn.setAttribute("type", "button");
        kezdesIdejeBtn.setAttribute("id", "elsoGomb");
        kezdesIdejeBtn.setAttribute("onclick", "szunetek()");
        kezdesIdejeBtn.textContent = "Leadás";
        document.getElementById("orakSzamaDivId").appendChild(kezdesIdejeBtn);

        const br = document.createElement("br"); 
        document.getElementById("orakSzamaDivId").appendChild(br);
        const br2 = document.createElement("br"); 
        document.getElementById("orakSzamaDivId").appendChild(br2);

        const ertek = document.getElementById("idoBekeres").value;
        ertekLista.push(ertek);

        console.log(ertekLista); //ideiglenes
        console.log(orakSzama); //ideiglenes
    }
}

function szunetek(){
    document.getElementById("idoBekeres").disabled = true;

    document.getElementById("elsoGomb").remove();

    const szunetHosszokLabel = document.createElement("label");
    szunetHosszokLabel.setAttribute("for", "szunetHosszokId");
    szunetHosszokLabel.setAttribute("id", "szunetHosszokLabelId");
    szunetHosszokLabel.textContent = "Hány percesek a szüneteid?";
    document.getElementById("orakSzamaDivId").appendChild(szunetHosszokLabel);

    const br = document.createElement("br");
    document.getElementById("orakSzamaDivId").appendChild(br);

    const szunetHosszok = document.createElement("input");
    szunetHosszok.setAttribute("type", "number");
    szunetHosszok.setAttribute("id", "szunetHosszokId");
    szunetHosszok.setAttribute("onchange", "szunetHosszokGomb()");
    document.getElementById("orakSzamaDivId").appendChild(szunetHosszok);
}

function szunetHosszokGomb(){
    if(!document.getElementById("szunetHosszokBtnId")){
        const szunetHosszokBtn = document.createElement("button");
        szunetHosszokBtn.setAttribute("type", "button");
        szunetHosszokBtn.setAttribute("id", "szunetHosszokBtnId");
        szunetHosszokBtn.setAttribute("onclick", "nagySzunet()");
        szunetHosszokBtn.textContent = "Leadás";
        document.getElementById("orakSzamaDivId").appendChild(szunetHosszokBtn);
    }
}

function nagySzunet(){
    if(document.getElementById("szunetHosszokId").value > 30){
        alert("A legnagyobb megengedett szünet 30 perc!");
        return;
    }

    document.getElementById("szunetHosszokBtnId").remove();

    document.getElementById("szunetHosszokId").disabled = true;

    const szunetHossz = document.getElementById("szunetHosszokId").value;
    szunetekHossza.push(szunetHossz);
    console.log(szunetekHossza); //ideiglenes
}