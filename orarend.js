window.onload = function(){
    const adatAtvitel = new URLSearchParams(window.location.search);

    const elsoOra = adatAtvitel.get("elsoOra");
    const orak = adatAtvitel.get("orak");
    const szunetHossza = adatAtvitel.get("szunetHossza");
    const vanNagySzunet = adatAtvitel.get("vanNagySzunet");
/*
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
*/
    csengetesiRend(elsoOra, orak, szunetHossza, vanNagySzunet);
}

function csengetesiRend(elsoOra, orak, szunetHossza, vanNagySzunet){
    let ora = parseInt(elsoOra.split(":")[0]);
    let perc = parseInt(elsoOra.split(":")[1]);

    const orakSzama = parseInt(orak);
    const szunet = parseInt(szunetHossza);
    const nagySzunet = (vanNagySzunet.toLowerCase() === "igen");

    const div = document.createElement("div");
    div.setAttribute("id", "csengetesiRendDiv");
    div.setAttribute("class", "mx-auto text-center mt-3");
    div.style.width = "50%";
    document.body.appendChild(div);

    for (let i = 1; i <= orakSzama; i++){
        let oraString = ora.toString().padStart(2, "0"); //toString ahhoz, hogy működjön a padStart
        let percString = perc.toString().padStart(2, "0"); //padStart: (targetLength, "fillCharacter")
        let kezdesiIdo = `${oraString}:${percString}`;

        perc += 45;
        while (perc >= 60){
            perc -= 60;
            ora++;
        }

        oraString = ora.toString().padStart(2, "0");
        percString = perc.toString().padStart(2, "0");
        let vegzesIdo = `${oraString}:${percString}`;

        const p = document.createElement("p");
        p.textContent = `${i}. óra: ${kezdesiIdo} - ${vegzesIdo}`;
        div.appendChild(p);
        if(szunet >= 1){
            if (i < orakSzama){
                let szunetPerc = szunet;
                if (nagySzunet && i === 4){
                    szunetPerc += 5;
                }
                perc += szunetPerc;
                while (perc >= 60){
                    perc -= 60;
                    ora++;
                }

                let szunetKezdete = vegzesIdo;
                oraString = ora.toString().padStart(2, "0");
                percString = perc.toString().padStart(2, "0");
                let szunetVege = `${oraString}:${percString}`;

                const p2 = document.createElement("p");
                p2.textContent = `${i}. szünet: ${szunetKezdete} - ${szunetVege}`;
                div.appendChild(p2);
            }
        }
    }
}