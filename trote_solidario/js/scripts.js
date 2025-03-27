function calcular(){
    // vamos criar duas variaveis
    // JS as variaveis não possuem tipo
    let mascote, homenagem, leite, kitavulso, suplementoavulso
    mascote = document.getElementById("mascote").value
    homenagem = document.getElementById("homenagem").value
    leite = document.getElementById("leite").value
    kitavulso = document.getElementById("kitavulso").value
    suplementoavulso = document.getElementById("suplementoavulso").value
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + (30 * Number(kitavulso)) + (15 * Number(suplementoavulso))
    //retorna o valor ao HTML
    document.getElementById("soma").innerHTML = `A soma é ${soma} !`
}