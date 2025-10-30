/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
//efeito blur busca o endereço ao clicar fora do campo cep ao ser preenchido
document.getElementById('cep').addEventListener('blur', function() {
    //busca o valor do input CEP no html
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres

    const url = `https://viacep.com.br/ws/${cep}/json/` // url para consultar banco de dados dos correios

    // Verifica se CEP tem 8 dígitos
    if (cep.length !== 8) {
        alert("CEP inválido. O CEP deve ter 8 dígitos.");
        return;
    }
    
    // req para a API viaCEP

    fetch(url)
        .then(response => response.json()) //converte para json
        .then(data => {
            //verifica se cep retornou algum erro
            if (data.erro) {
                alert("CEP não encontrado");
                return;
            }

            //Preenche os campos com os dados da API dos correios
            document.getElementById('rua').value = data.logradouro || "Não disponível"
            document.getElementById('bairro').value = data.bairro || "Não disponível"
            document.getElementById('cidade').value = data.localidade || "Não disponível"
            document.getElementById('estado').value = data.uf || "Não disponível"
        })
        .catch(error => {
            alert("Erro ao buscar CEP. Tente Novamente.");
            console.error(error);
        });  
});

