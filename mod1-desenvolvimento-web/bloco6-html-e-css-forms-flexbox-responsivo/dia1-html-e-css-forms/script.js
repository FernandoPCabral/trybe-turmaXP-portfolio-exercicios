const estadosBr = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

const selecaoEstado = document.getElementById('estado-usuario');

const estadosBrasil = () => {
    for (let index = 0; index < estadosBr.length; index += 1){
        let estado = document.createElement('option')
        estado.value = "estado " + estadosBr[index]
        estado.innerText = estadosBr[index]
        selecaoEstado.appendChild(estado)
    }
}

estadosBrasil();

let botao = document.querySelector("#botao-submit");

botao.addEventListener("click", (event) => {
    event.preventDefault()
})

