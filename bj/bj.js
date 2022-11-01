count = 0
player1 = 0
player2 = 0
round = 1
baralho = []
carta = 1
p1stop = 0
p2stop = 0



function play() {
    document.getElementById("game").style.display = "block";
    document.getElementById("menu").style.display = "none";
}

function stop() {
    document.getElementById("sacar").disabled = true
    p1stop = 1
}


function draw() {
    if (round == 1) {
        player1 = player1 + baralho[count]
        count++
        document.getElementById("j1").innerHTML = player1
        round = 2
        document.getElementById("sacar").disabled = true
        setTimeout(draw, 1000);
        calcvariacao = (min, max) => Math.floor(Math.random() * (min, max) + min);
        variacao = calcvariacao(0,101)
        
        
        


    }
    else if (round == 2) {
        
        switch (true) {
            case player2 >=0 && player2 <=10 && variacao <= 9 :
                p2stop = 1
                round = 1
                document.getElementById("sacar").disabled = false
                
                break;

            case player2 >=0 && player2 <=10 && variacao >= 9 && p2stop == 0 && p1stop == 0 :
                player2 = player2 + baralho[count]
                count++
                document.getElementById("j2").innerHTML = player2
                round = 1
                document.getElementById("sacar").disabled = false
                
                break;


            case player2 >=11 && player2 <=15 && variacao <= 18 :
                p2stop = 1
                round = 1
                document.getElementById("sacar").disabled = false
                
                break;
            case player2 >=11 && player2 <=15 && variacao >= 18 && p2stop == 0 && p1stop == 0 :
                player2 = player2 + baralho[count]
                count++
                document.getElementById("j2").innerHTML = player2
                round = 1
                document.getElementById("sacar").disabled = false
                
                break;


            case player2 >=16 && player2 <=19 && variacao <= 36 :
                p2stop = 1
                round = 1
                document.getElementById("sacar").disabled = false
                
                break;
            case player2 >=16 && player2 <=19 && variacao >= 36 && p2stop == 0 && p1stop == 0:
                player2 = player2 + baralho[count]
                count++
                document.getElementById("j2").innerHTML = player2
                round = 1
                document.getElementById("sacar").disabled = false
                
                break;


            case player2 >=20 && variacao <= 95 :
                p2stop = 1
                round = 1
                document.getElementById("sacar").disabled = false
                
                break;
            case player2 >=20 && variacao >= 95 && p2stop == 0 && p1stop == 0:
                player2 = player2 + baralho[count]
                count++
                document.getElementById("j2").innerHTML = player2
                round = 1
                document.getElementById("sacar").disabled = false
                
                break;


            case p2stop == 1:
                
                break

            case p1stop == 1 :
                
                break

            /*case p1stop == 1 && p2stop == 1 :
            if (player1 >= 22 || player1 < player2 && player2 <=21){
            alert("Máquina ganhou")}
            else if (player2 >= 22 || player2 < player1 && player1 <=21){
                alert("Você ganhou")
            }
            else if (player1 >= 22 && player2 >=22 || player1 == player2)
            {alert("Empate ou perderam")}
            break*/


        }
    }
}

do {
    baralho.push(carta)
    carta = carta + 1
    baralho.sort(function (a, b) { return 0.5 - Math.random() })
    if (carta == 14) { carta = 1 }
} while (baralho.length < 52);

