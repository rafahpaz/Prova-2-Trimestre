const apagaNumero = function(){
    document.getElementById ('tamanho').value = ""
    document.getElementById ('quilos').value = ""
    document.getElementById ('resultado').value = ""
}

const somar = function(){
    let tamanho = document.getElementById ('tamanho').value
    let quilos = document.getElementById ('quilos').value
    z = (parseFloat(quilos) / (parseFloat(tamanho) * parseFloat(tamanho))).toFixed(2)
    document.getElementById('resultado').value = z  
}
    if (z < 18.5) {
    z+=" Magreza"
} 
    else if (z > 18.5 && z < 24.9) {
    z+=" Normal"
} 
    else if (z > 25.0 && z <  29.9) {
    z+=" Sobrepeso"
} 
    else if (z > 30.0 && z <  39.9) {
    z+=" Obesidade"
} 
    else {
    z+=" Obesidade Grave!"
}

