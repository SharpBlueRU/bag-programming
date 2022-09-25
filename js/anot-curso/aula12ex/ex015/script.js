function verificar(){
    let anoNasc = window.document.getElementById('anoNascimento')
    let sexoMasc = window.document.getElementById('sexoMasc')
    let resultPar = window.document.getElementById('paragrafo')
    let resultImg = window.document.getElementById('foto')

    let data = new Date()
    let anoAtual = data.getFullYear()
    let idade = anoAtual - Number(anoNasc.value)
    
    if (sexoMasc.checked){
        var sexo = 'Homem'
    } else {
        var sexo = 'Mulher'
    }
    
    if (idade <= 5 && sexo == 'Homem'){ 
        resultPar.innerHTML = `Detectamos um ${sexo} com ${idade} anos.`
        resultImg.src = 'foto-bebe-m.png'
    } else if(idade <=  5 && sexo == 'Mulher'){
        resultPar.innerHTML = `Detectamos uma ${sexo} com ${idade} anos.`
        resultImg.src = 'foto-bebe-f.png'
    } else if (idade < 18 && sexo == 'Homem'){
        resultPar.innerHTML = `Detectamos um ${sexo} com ${idade} anos`
        resultImg.src = 'foto-jovem-m.png'
    } else if (idade < 18 && sexo == 'Mulher'){
        resultPar.innerHTML = `Detectamos uma ${sexo} com ${idade} anos.`
        resultImg.src = 'foto-jovem-f.png'
    } else if (idade < 65 && sexo == 'Homem'){
        resultPar.innerHTML = `Detectamos um ${sexo} com ${idade} anos.`
        resultImg.src = 'foto-adulto-m.png' 
    } else if (idade < 65 && sexo == 'Mulher'){
        resultPar.innerHTML = `Detectamos uma ${sexo} com ${idade} anos.`
        resultImg.src = 'foto-adulto-f.png'
    } else if (idade >= 65 && sexo == 'Homem'){
        resultPar.innerHTML = `Detectamos um ${sexo} com ${idade} anos.`
        resultImg.src = 'foto-idoso-m.png'
    } else {
        resultPar.innerHTML = `Detectamos uma ${sexo} com ${idade} anos.`
        resultImg.src = 'foto-idoso-f.png'
    }
}