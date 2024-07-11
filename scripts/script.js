document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form-contato');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validar se todos os campos estão preenchidos
        var nome = document.getElementById('nome').value;
        var whatsapp = document.getElementById('whatsapp').value;
        var email = document.getElementById('email').value;
        var servicoDesejado = document.getElementById('servico_desejado').value;
        var frotaEscolhida = document.getElementById('frota_escolhida').value;
        var quantidadeCarros = document.getElementById('quantidade_carros').value;

        if (nome && whatsapp && email && servicoDesejado && frotaEscolhida && quantidadeCarros) {
            // Se todos os campos estão preenchidos, exibe a mensagem de sucesso
            var mensagemSucesso = document.createElement('div');
            mensagemSucesso.textContent = 'Formulário enviado com sucesso!';
            mensagemSucesso.style.color = 'green';
            form.appendChild(mensagemSucesso);
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
