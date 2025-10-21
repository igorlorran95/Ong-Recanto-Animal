/**
 * Arquivo: js/validation.js
 * Objetivo: Sistema de verificação de consistência de dados em formulários (Terceira Entrega)
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cadastro');
    if (!form) return;

    const cpfInput = document.getElementById('cpf');
    const telInput = document.getElementById('telefone');

    // Regras de Validação com mensagens específicas
    const validationRules = [
        { 
            input: cpfInput, 
            message: 'O CPF deve ter o formato 000.000.000-00 e ser válido.', 
            validator: validarCPF 
        },
        { 
            input: telInput, 
            message: 'O Telefone deve ter o formato (XX) 9XXXX-XXXX.', 
            validator: validarTelefone 
        },
    ];

    // --- Funções de Verificação de Consistência ---
    function validarCPF(cpf) {
        // Verifica se a máscara (000.000.000-00) foi seguida
        if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) return false; 
        
        // Remove caracteres para checar o tamanho (11 dígitos)
        cpf = cpf.replace(/[^\d]/g, '');
        if (cpf.length !== 11) return false;

        // Evita CPFs inválidos óbvios (ex: 111.111.111-11)
        if (/^(\d)\1{10}$/.test(cpf)) return false; 

        // Retorna true (Validação aprovada)
        return true; 
    }
    
    function validarTelefone(tel) {
        // Verifica se a máscara ((XX) 9XXXX-XXXX) foi seguida
        const pattern = /^\(\d{2}\)\s\d{5}-\d{4}$/; 
        return pattern.test(tel);
    }

    // --- Funções de Feedback e Manipulação do DOM ---

    function showFeedback(input, message, isValid) {
        // O elemento de feedback é colocado logo após o input
        let feedbackElement = input.nextElementSibling;
        
        // 1. Limpa o feedback se o campo for válido
        if (isValid) {
            if (feedbackElement && feedbackElement.classList.contains('form-error-message')) {
                feedbackElement.remove();
            }
            input.style.borderColor = ''; 
            return;
        }

        // 2. Mostra o feedback se o campo for inválido
        if (!feedbackElement || !feedbackElement.classList.contains('form-error-message')) {
            // Cria o elemento se ele não existir
            feedbackElement = document.createElement('div');
            feedbackElement.className = 'form-error-message';
            input.parentNode.insertBefore(feedbackElement, input.nextSibling);
            input.style.borderColor = 'var(--color-error)'; 
        }
        feedbackElement.textContent = message;
    }

    // -------------------------------------------------------------
    // ATIVAÇÃO: Adiciona listeners para validação (focusout/blur)
    // -------------------------------------------------------------
    validationRules.forEach(rule => {
        // Valida quando o usuário sai do campo (blur)
        rule.input.addEventListener('blur', () => {
            if (rule.input.value.trim() === '') return; // Não valida se estiver vazio
            const isValid = rule.validator(rule.input.value);
            showFeedback(rule.input, rule.message, isValid);
        });

        // Limpa o visual do erro assim que o usuário começa a digitar
        rule.input.addEventListener('input', () => {
            if (rule.input.style.borderColor === 'var(--color-error)') {
                const isValid = rule.validator(rule.input.value);
                if (isValid) {
                    showFeedback(rule.input, rule.message, true);
                }
            }
        });
    });

    // -------------------------------------------------------------
    // ATIVAÇÃO: Validação final ao tentar submeter o formulário
    // -------------------------------------------------------------
    form.addEventListener('submit', (e) => {
        let formIsValid = true;

        validationRules.forEach(rule => {
            const isValid = rule.validator(rule.input.value);
            showFeedback(rule.input, rule.message, isValid);
            if (!isValid) {
                formIsValid = false;
            }
        });

        if (!formIsValid) {
            e.preventDefault(); // Impede o envio se houver erros de consistência
            alert("Por favor, corrija os dados destacados antes de enviar.");
        }
        // Se formIsValid for true, o script de simulação de envio (seu script original) será executado
    });
});