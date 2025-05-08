const form = document.getElementById('form-catalogo');
const lista = document.getElementById('listaItens');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeItem').value;
    const categoria = document.getElementById('categoriaItem').value; 
    const novoItem = document.createElement('li');
    novoItem.innerHTML = `${nome} (${categoria}) <button class="remover" id="btnRemover">Remover</button>`;
    
    lista.appendChild(novoItem);
    form.reset();
});
lista.addEventListener('click',function(event){
    if(event.target.classList.contains('remover')){
        //event.target.parentElement.remove()
        if(confirm('Tem certeza que deseja remover este item?')){
            event.target.parentElement.remove();
        }
    }
})