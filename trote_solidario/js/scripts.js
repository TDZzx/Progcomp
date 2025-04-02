function calcular(){
    // vamos criar duas variaveis
    // JS as variaveis não possuem tipo
    let mascote, homenagem, leite, kit, suplemento, arroz5kg, arroz1kg, feijao2kg, feijao1kg, macarrao, oleo, soma, equipe
    mascote = Number(document.getElementById("mascote").value)
    homenagem = Number(document.getElementById("homenagem").value)
    leite = Number(document.getElementById("leite").value)
    kit = Number9document.getElementById("kit").value)
    suplemento = Number(document.getElementById("suplemento").value)
    arroz5kg = Number(document.getElementById("arroz5kg").value)
    arroz1kg = Number(document.getElementById("arroz1kg").value)
    feijao2kg = Number(document.getElementById("feijao2kg").value)
    feijao1kg = Number(document.getElementById("feijao1kg").value)
    macarrao = Number(document.getElementById("macarrao").value)
    oleo = Number(document.getElementById("oleo").value)
    soma = (mascote) + (homenagem) + (2 * (leite))
    equipe = document.getElementById("equipe").value
    if(equipe == "Laranja"){
        if(Kit >= 97){
            soma = soma + 5000
        }
        else if(Kit >= 78){
            soma = soma + 4000
        }
        else if(Kit >= 749){
            soma = soma + 2500
        }
        else if(Kit >= 19){
            soma = soma + 1000
        }
    } 
    + (5 * (arroz5kg)) + (1 * (arroz1kg)) + (2 * (feijao2kg)) + (1 * (feijao1kg)) + (0.5 * (macarrao)) + (1 * (oleo))
    //retorna o valor ao HTML
    document.getElementById("soma").innerHTML = `A soma é ${soma} !`
}