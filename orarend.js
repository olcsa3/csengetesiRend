window.onload = function(){
    const adatAtvitel = new URLSearchParams(window.location.search);

    const elsoOra = adatAtvitel.get("elsoOra");
    const orak = adatAtvitel.get("orak");
    const szunetHossza = adatAtvitel.get("szunetHossza");
    const vanNagySzunet = adatAtvitel.get("vanNagySzunet");

    const adatokDiv = document.createElement("div");
    adatokDiv.setAttribute("id", "adatokDivId");
    document.body.appendChild(adatokDiv);

    const p1 = document.createElement("p");
    p1.setAttribute("id", "elsoOraId");
    adatokDiv.appendChild(p1);
    const p2 = document.createElement("p");
    p2.setAttribute("id", "orakId");
    adatokDiv.appendChild(p2);
    const p3 = document.createElement("p");
    p3.setAttribute("id", "szunetHosszaId");
    adatokDiv.appendChild(p3);
    const p4 = document.createElement("p");
    p4.setAttribute("id", "vanNagySzunetId");
    adatokDiv.appendChild(p4);

    document.getElementById("elsoOraId").textContent = `1. óra kezdete: ${elsoOra}`;
    document.getElementById("orakId").textContent = `Órák száma: ${orak}`;
    document.getElementById("szunetHosszaId").textContent = `Szünetek hossza: ${szunetHossza}`;
    document.getElementById("vanNagySzunetId").textContent = `Van-e nagyszünet:  ${vanNagySzunet}`;
}

function csengetesiRend(elsoOra, orak, szunetHossza, vanNagySzunet){
    let ora = parseInt(elsoOra.split(":")[0]);
    let perc = parseInt(elsoOra.split(":")[1]);
    
}