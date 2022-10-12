let valores = [4,1,5,7,2,6]
valores.sort()

for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}    