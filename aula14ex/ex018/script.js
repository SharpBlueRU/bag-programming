function gerar(){
    let numero = Number(document.getElementById('txtn').value)
    let tab = document.getElementById('seltab')
    
    if(numero == 0){
        alert('Digite um numero!')
    }else{
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.txt = `${Number(numero)} x ${c} = ${c * Number(numero)}`
            tab.appendChild(item)
        }
    } 
}
    