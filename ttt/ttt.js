const modal = document.querySelector(".modal");
const des1 = document.getElementById("num1");
const des2 = document.getElementById("num2");
const des3 = document.getElementById("num3");
const des4 = document.getElementById("num4");
const des5 = document.getElementById("num5");
const des6 = document.getElementById("num6");
const des7 = document.getElementById("num7");
const des8 = document.getElementById("num8");
const des9 = document.getElementById("num9");


function reset() {
    arrayp1.splice(0);
    arrayp2.splice(0);
    document.getElementById("num1").style.background = "white";
    document.getElementById("num2").style.background = "white";
    document.getElementById("num3").style.background = "white";
    document.getElementById("num4").style.background = "white";
    document.getElementById("num5").style.background = "white";
    document.getElementById("num6").style.background = "white";
    document.getElementById("num7").style.background = "white";
    document.getElementById("num8").style.background = "white";
    document.getElementById("num9").style.background = "white";
    jogador.value = "1";
    document.getElementById("num1").disabled = false;
    document.getElementById("num2").disabled = false;
    document.getElementById("num3").disabled = false;
    document.getElementById("num4").disabled = false;
    document.getElementById("num5").disabled = false;
    document.getElementById("num6").disabled = false;
    document.getElementById("num7").disabled = false;
    document.getElementById("num8").disabled = false;
    document.getElementById("num9").disabled = false;
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    velha.value = "0"
    ganhou.value = "0"
}

arrayp1 = [];
arrayp2 = [];

function cor1() {
    if (jogador.value === "1") {
        const modal = document.querySelector(".modal");
        document.getElementById("num1").style.background = "blue";
        jogador.value = "2"; 
        arrayp1.push("1");
        velha.value++
        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("2") ) {
                if (arrayp1.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        document.getElementById("num1").disabled = true;  
        if (arrayp1.includes("4") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("7") ) {
            if (arrayp1.includes("8") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("4") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("2") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("6") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    } else if (jogador.value === "2") {
        const modal = document.querySelector(".modal");
        document.getElementById("num1").style.background = "red";
        jogador.value = "1"; 
        arrayp2.push("1");
        document.getElementById("num1").disabled = true;
        velha.value++  
        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("2") ) {
                if (arrayp2.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("4") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("7") ) {
            if (arrayp2.includes("8") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("4") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("2") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("6") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    }
}

function cor2() {
    if (jogador.value === "1") {
        const modal = document.querySelector(".modal");
        document.getElementById("num2").style.background = "blue";
        jogador.value = "2"; 
        arrayp1.push("2");
        document.getElementById("num2").disabled = true;  velha.value++
        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("2") ) {
                if (arrayp1.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("4") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("7") ) {
            if (arrayp1.includes("8") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("4") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("2") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("6") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                    modal.style.display = "block";
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    } else if (jogador.value === "2") {
        const modal = document.querySelector(".modal");
        document.getElementById("num2").style.background = "red";
        jogador.value = "1"; 
        arrayp2.push("2");
        document.getElementById("num2").disabled = true;  velha.value++
        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("2") ) {
                if (arrayp2.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("4") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("7") ) {
            if (arrayp2.includes("8") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("4") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("2") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("6") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    }
}

function cor3() {
    if (jogador.value === "1") {
        const modal = document.querySelector(".modal");
        document.getElementById("num3").style.background = "blue";
        jogador.value = "2"; 
        arrayp1.push("3");
        document.getElementById("num3").disabled = true;  velha.value++
        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("2") ) {
                if (arrayp1.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("4") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("7") ) {
            if (arrayp1.includes("8") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("4") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("2") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("6") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    } else if (jogador.value === "2") {
        const modal = document.querySelector(".modal");
        document.getElementById("num3").style.background = "red";
        jogador.value = "1"; 
        arrayp2.push("3");
        document.getElementById("num3").disabled = true;  velha.value++
        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("2") ) {
                if (arrayp2.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("4") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("7") ) {
            if (arrayp2.includes("8") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("4") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("2") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("6") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    }
}

function cor4() {
    if (jogador.value === "1") {
        const modal = document.querySelector(".modal");
        document.getElementById("num4").style.background = "blue";
        jogador.value = "2"; 
        arrayp1.push("4");
        document.getElementById("num4").disabled = true;  velha.value++
        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("2") ) {
                if (arrayp1.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("4") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("7") ) {
            if (arrayp1.includes("8") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                    modal.style.display = "block";
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("4") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("2") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("6") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    } else if (jogador.value === "2") {
        const modal = document.querySelector(".modal");
        document.getElementById("num4").style.background = "red";
        jogador.value = "1"; 
        arrayp2.push("4");
        document.getElementById("num4").disabled = true;  velha.value++
        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("2") ) {
                if (arrayp2.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("4") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("7") ) {
            if (arrayp2.includes("8") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("4") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("2") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("6") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    }
}

function cor5() {
    if (jogador.value === "1") {
        const modal = document.querySelector(".modal");
        document.getElementById("num5").style.background = "blue";
        jogador.value = "2"; 
        arrayp1.push("5");
        document.getElementById("num5").disabled = true;  velha.value++
        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("2") ) {
                if (arrayp1.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("4") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("7") ) {
            if (arrayp1.includes("8") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("4") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("2") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("6") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    } else if (jogador.value === "2") {
        const modal = document.querySelector(".modal");
        document.getElementById("num5").style.background = "red";
        jogador.value = "1"; 
        arrayp2.push("5");
        document.getElementById("num5").disabled = true;  velha.value++
        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("2") ) {
                if (arrayp2.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("4") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("7") ) {
            if (arrayp2.includes("8") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("4") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("2") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("6") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    }
}

function cor6() {
    if (jogador.value === "1") {
        const modal = document.querySelector(".modal");
        document.getElementById("num6").style.background = "blue";
        jogador.value = "2"; 
        arrayp1.push("6");
        document.getElementById("num6").disabled = true;  velha.value++
        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("2") ) {
                if (arrayp1.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("4") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("7") ) {
            if (arrayp1.includes("8") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("4") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("2") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("6") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    } else if (jogador.value === "2") {
        const modal = document.querySelector(".modal");
        document.getElementById("num6").style.background = "red";
        jogador.value = "1"; 
        arrayp2.push("6");
        document.getElementById("num6").disabled = true;  velha.value++
        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("2") ) {
                if (arrayp2.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("4") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("7") ) {
            if (arrayp2.includes("8") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("4") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("2") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("6") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    }
}

function cor7() {
    if (jogador.value === "1") {
        const modal = document.querySelector(".modal");
        document.getElementById("num7").style.background = "blue";
        jogador.value = "2"; 
        arrayp1.push("7");
        document.getElementById("num7").disabled = true;  velha.value++
        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("2") ) {
                if (arrayp1.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("4") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("7") ) {
            if (arrayp1.includes("8") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("4") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("2") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("6") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    } else if (jogador.value === "2") {
        const modal = document.querySelector(".modal");
        document.getElementById("num7").style.background = "red";
        jogador.value = "1"; 
        arrayp2.push("7");
        document.getElementById("num7").disabled = true;  velha.value++
        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("2") ) {
                if (arrayp2.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("4") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("7") ) {
            if (arrayp2.includes("8") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("4") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("2") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("6") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    }
}

function cor8() {
    if (jogador.value === "1") {
        const modal = document.querySelector(".modal");
        document.getElementById("num8").style.background = "blue";
        jogador.value = "2"; 
        arrayp1.push("8");
        document.getElementById("num8").disabled = true;  velha.value++
        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("2") ) {
                if (arrayp1.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("4") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("7") ) {
            if (arrayp1.includes("8") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("4") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("2") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("6") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    } else if (jogador.value === "2") {
        const modal = document.querySelector(".modal");
        document.getElementById("num8").style.background = "red";
        jogador.value = "1";
        
        arrayp2.push("8");
        document.getElementById("num8").disabled = true;  velha.value++
        
        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("2") ) {
                if (arrayp2.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("4") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("7") ) {
            if (arrayp2.includes("8") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("4") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("2") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("6") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    }
}

function cor9() {
    if (jogador.value === "1") {
        const modal = document.querySelector(".modal");
        document.getElementById("num9").style.background = "blue";
        jogador.value = "2";
        
        arrayp1.push("9");
        document.getElementById("num9").disabled = true;  velha.value++
        
        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("2") ) {
                if (arrayp1.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("4") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("7") ) {
            if (arrayp1.includes("8") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("4") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("2") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("6") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("1") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp1.includes("3") ) {
            if (arrayp1.includes("5") ) {
                if (arrayp1.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Azul");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
    } else if (jogador.value === "2") {
        document.getElementById("num9").style.background = "red";
        jogador.value = "1";
        arrayp2.push("9");
        document.getElementById("num9").disabled = true;         
        const modal = document.querySelector(".modal");
        velha.value++
        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("2") ) {
                if (arrayp2.includes("3") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("4") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("6") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("7") ) {
            if (arrayp2.includes("8") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("4") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("2") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("8") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("6") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("1") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("9") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }

        if (arrayp2.includes("3") ) {
            if (arrayp2.includes("5") ) {
                if (arrayp2.includes("7") ) {
                    if(ganhou.value == "0"){
                        alert("Vitória do Jogador Vermelho");
                        modal.style.display = "block";
                        ganhou.value = "1"
                    }
                }
            }
        }
        if (velha.value == 9) { if (ganhou.value == "0") { alert("Velha"); modal.style.display = "block"; } }
        else { }
        
    }
}








/*function testar() {
    if (velha.value == 9) { if (modal.style.displahy = "block") { alert("Velha") } }
        else { }
    else { alert("nada") }
}*/