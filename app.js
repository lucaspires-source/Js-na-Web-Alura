

const criarTarefa = (e) => {
    e.preventDefault()  
    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    const tarefa = document.createElement('li');
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`;
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa);
    input.value = '';
}


const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);
const concluirTarefa = (e) =>{
    const botaoConclui = e.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}
const BotaoConclui = () =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.innerHTML = `Concluir`
    botaoConclui.classList.add('form-button')
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}



const deletaTarefa = (e) =>{
    const botaoDeleta = e.target
    const tarefaCompleta = botaoDeleta.parentElement
    tarefaCompleta.remove()

}
const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerHTML = `Deletar`
    botaoDeleta.classList.add('form-button')
    botaoDeleta.addEventListener('click', deletaTarefa)
    return botaoDeleta
}