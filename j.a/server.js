const precos = {
    lavagemBasica: "R$ 40,00",
    lavagemCompleta: "R$ 80,00",
    higienizacaoInterna: "R$ 60,00",
    polimento: "R$ 100,00"
};

// Função que é chamada quando o usuário seleciona um serviço
function mostrarPreco() {
    // Obter o valor do serviço selecionado
    const servicoEscolhido = document.getElementById('servicos').value;
    
    // Obter o elemento para exibir o preço
    const precoElement = document.getElementById('preco');

    // Verificar se o serviço foi selecionado
    if (servicoEscolhido) {
        // Mostrar o preço do serviço
        precoElement.innerHTML = `O preço para ${servicoEscolhido.replace(/([A-Z])/g, ' $1').trim()} é ${precos[servicoEscolhido]}.`;
    } else {
        // Caso nenhum serviço tenha sido selecionado
        precoElement.innerHTML = '';
    }
}

