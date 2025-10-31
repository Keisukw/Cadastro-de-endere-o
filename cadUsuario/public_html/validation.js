$(document).ready(function () { //espera o documento carregar antes de executar o JQuery
    //Função para validar o formulário
    $("#registrationForm").on("submit", function(event) {
        event.preventDefault(); //Impede o envio do formulário enquanto validamos
        
        let isValid = true; //responsável por controlar se é válido ou não
        
        // Limpa mensagens de erro anteriores e estilos de erro
        $('.error-message').remove();
        $('.form-control').removeClass('is-invalid');
        
        function validarCampo(id) {
            const campo = $("#"+id);
            const valor = campo.val().trim(); //pega oque ta escrito no campo
            
            function casosDeErro(mensagem) {
                isValid = false;
                //Esse trecho serve pra marcar o campo como inválido e mostrar uma mensagem de erro personalizada logo abaixo dele.
                $(campo).addClass('is-invalid'); //muda a aparência do input
                $(campo).after(`<div class="error-message text-danger w-100">${mensagem}`);
            }
        
            if (valor === '') {
                casosDeErro(`O campo ${id} é obrigatório`);
            } else {
                if (id === "email") {
                    // Expressão regular regex para validar e-mails com domínios válidos
                    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net|gov|edu|co|info|io|br|[a-z]{2,})$/;
                    //o código só aceita e-mails que sigam esse formato, tipo exemplo@dominio.com.br
                    if (!emailPattern.test(valor)) { //ele vai testar com o regex
                        casosDeErro(`O e-mail deve ser válido (ex: exemplo@dominio.com).`);
                    }}

                else if (id === "senha") {
                    const senhaPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/;
                    if (!senhaPattern.test(valor)) {
                        casosDeErro(`A senha deve ter pelo menos 8 caracteres, incluindo um número e um caractere especial.`);
                    }}
                
                else if (id === "numero") {
                    if (!/^\d+$/.test(valor)) {
                        casosDeErro(`O campo Número deve conter apenas números.`);
                   }}
                
                else if (id === "cep") {
                    if (!/^\d{8}$/.test(valor)) {
                        casosDeErro(`O campo CEP deve conter 8 números.`);
                    }}}}
        
        //Validação do nome, sobrenome, email, senha, numero, cep
        validarCampo("nome");
        validarCampo("sobrenome");
        validarCampo("email");
        validarCampo("senha");
        validarCampo("numero");
        validarCampo("cep");

        // Verifica se a validação foi bem-sucedida
        if (!cepValido) {
            isValid = false;
            alert('Erro ao buscar CEP');
        }
        if (isValid) {
            // Caso o formulário esteja válido, podemos enviar
            alert('Formulário enviado com sucesso!');
            this.submit();
        } else {
            // Caso haja erros, impede o envio e mostra as mensagens
            alert('Por favor, corrija os erros abaixo antes de enviar.');
        }});
    // Máscaras para o campo CEP (apenas números)
    $('#cep').on('input', function() {
        var value = $(this).val().replace(/\D/g, ''); // Remove qualquer coisa que não seja número
        if (value.length <= 8) {
            $(this).val(value);
        }});

    // Máscaras para o campo Número (apenas números)
    $('#numero').on('input', function() {
        var value = $(this).val().replace(/\D/g, ''); // Remove qualquer coisa que não seja número
        $(this).val(value);
    });});