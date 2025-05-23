
function chamaOiMundo(){
    console.log("Oi mundo!")
}

const modal = document.getElementById("modal")
const formulario = document.getElementById("study-form")

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

//inputs
const materiaInput = document.getElementById("materia")
const dataInput = document.getElementById("data")
const corInput = document.getElementById("cor")

// console.log(modal)

function abrirModal(){
    modal.classList.add('open')
}

function fecharModal(){
    modal.classList.remove('open')
}

function salvar(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

//arrow function
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const novaTarefa = {
        materia: materiaInput.value,
        data: dataInput.value,
        cor: corInput.value
    }

    tarefas.push(novaTarefa);
    salvar()
    console.log(tarefas)

})