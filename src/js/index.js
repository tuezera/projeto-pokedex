/*

*/

const listaSelector = document.querySelectorAll('.pokemon');
const cartaoPokemon = document.querySelectorAll('.cartao-principal');



listaSelector.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
        const pokemonAtual = document.querySelector('.aberto');
        pokemonAtual.classList.remove('aberto');
        
        const idPokemonSelecionado = pokemon.attributes.id.value;
        const idNovoCartao = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonSelecionado = document.getElementById(idNovoCartao);
        cartaoPokemonSelecionado.classList.add('aberto');
        
        const seletorAntigo = document.querySelector('.ativo');
        seletorAntigo.classList.remove('ativo');

        document.getElementById(idPokemonSelecionado).classList.add('ativo');

    })});
