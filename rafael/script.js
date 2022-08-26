const apagaNumero = function(){
    document.getElementById ('tamanho').value = ""
    document.getElementById ('quilos').value = ""
    document.getElementById ('resultado').value = ""
}

const somar = function(){
    let tamanho = document.getElementById ('tamanho').value
    let quilos = document.getElementById ('quilos').value
    z = parseFloat(quilos) / (parseFloat(tamanho) * parseFloat(tamanho))
    document.getElementById('resultado').value = z  
}
