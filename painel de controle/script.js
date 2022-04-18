

 const mussarela = document.getElementById("mussarela")
 const calabresa = document.getElementById("calabresa")
 const margherita = document.getElementById("margherita")
 const env = document.getElementById("enviar")
 const est = document.getElementById("estorno")
 const plan = document.getElementById("btnplanilha")
 
 plan.addEventListener("click", enviar)
 env.addEventListener("click", vender);
 est.addEventListener("click", estornar);
 
 



 var cCalabresa = 0;
 var acCalabresa = 0.0;
 var cMussarela = 0;
 var acMussarela = 0.0;
 var cMargherita = 0;
 var acMargherita = 0.0;

 
    
 function estornar() {
        if (mussarela.checked) {
            if (cMussarela > 0) {
                cMussarela--;
                acMussarela -= 30.00;
                document.getElementById("quantidadem").innerHTML = cMussarela;
                document.getElementById("somam").innerHTML = "R$ " + acMussarela.toFixed(2);
            }
        } 
        else if (calabresa.checked) {
            if (cCalabresa > 0) {
                cCalabresa--;
                acCalabresa -= 30.00;
                document.getElementById("quantidadec").innerHTML = cCalabresa;
                document.getElementById("somac").innerHTML = "R$ " + acCalabresa.toFixed(2);
            }
        } 
        else {
            if (cMargherita > 0) {
                cMargherita--;
                acMargherita -= 30.00;
                document.getElementById("quantidadema").innerHTML = cMargherita;
                document.getElementById("somama").innerHTML = "R$ " + acMargherita.toFixed(2);
            }
        }
    }


    function vender() {
        if (mussarela.checked) {
            cMussarela ++; //cMussarela = cMussarela +1; contador
            acMussarela += 30.00; // acMussarela = acMussarela + 300.00;
            document.getElementById("quantidadem").innerHTML = cMussarela;
            document.getElementById("somam").innerHTML = "R$" + acMussarela.toFixed(2);
        } else if (calabresa.checked) {
            cCalabresa ++;
            acCalabresa += 30.00;
            document.getElementById("quantidadec").innerHTML = cCalabresa;
            document.getElementById("somac").innerHTML = "R$ " + acCalabresa.toFixed(2);
        } else {
            cMargherita ++;
            acMargherita += 30.00;
            document.getElementById("quantidadema").innerHTML = cMargherita;
            document.getElementById("somama").innerHTML = "R$ " + acMargherita.toFixed(2);

        }
    }

    function enviar(){
        TableToExcel.convert(document.getElementById("tabela"));
     }
