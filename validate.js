document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');
    const botaoEnviar = document.getElementById('botaoEnviar');

    // Função de validação de email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Função para validar o formulário
    function validateForm() {
        let isValid = true;

        // Limpa as mensagens de erro anteriores
        clearErrorMessages();

        if (nome.value.trim() === '') {
            showError(nome, 'O campo nome é obrigatório.');
            isValid = false;
        }

        if (email.value.trim() === '') {
            showError(email, 'O campo email é obrigatório.');
            isValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, 'Por favor, insira um email válido.');
            isValid = false;
        }

        if (assunto.value.trim() === '') {
            showError(assunto, 'O campo assunto é obrigatório.');
            isValid = false;
        }

        if (mensagem.value.trim() === '') {
            showError(mensagem, 'O campo mensagem é obrigatório.');
            isValid = false;
        }

        return isValid;
    }

    // Função para mostrar mensagem de erro
    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.innerText = message;
        input.parentElement.appendChild(error);
        input.classList.add('invalid');
    }

    // Função para limpar mensagens de erro
    function clearErrorMessages() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());

        const inputs = document.querySelectorAll('.invalid');
        inputs.forEach(input => input.classList.remove('invalid'));
    }

    // Adiciona o evento de submit ao formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm()) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        }
    });
});
