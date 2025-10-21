/**
 * Arquivo: js/spa.js
 * Objetivo: Simular uma aplicação SPA básica e renderizar cards via template JS (Terceira Entrega)
 */

// 1. Dados simulados dos animais
const animaisParaAdocao = [
    { id: 1, nome: "Rex", idade: "3 anos", porte: "médio", temperamento: "Calmo e brincalhão", urgencia: true, img: "imagens/REX.png" },
    { id: 2, nome: "Miau", idade: "1 ano", porte: "pequeno", temperamento: "Dócil e adora carinho", urgencia: false, img: "imagens/MIAU.png" },
    { id: 3, nome: "Flora", idade: "5 anos", porte: "pequeno", temperamento: "Perfeita para apartamentos", urgencia: false, img: "imagens/FLORA.png" },
    { id: 4, nome: "Bolt", idade: "2 anos", porte: "grande", temperamento: "Cheio de energia, precisa de espaço", urgencia: true, img: "imagens/BOLT.png" }, // Exemplo de novo item
];

// 2. Sistema de Templates JavaScript (Template Literal)
const animalCardTemplate = (animal) => {
    // Define a tag de urgência ou de novo
    const badge = animal.urgencia 
        ? `<span class="badge badge-urgent">URGENTE</span>` 
        : `<span class="badge badge-primary">NOVO</span>`;
    
    return `
        <article class="card" data-id="${animal.id}">
            <div class="card-image"><img src="${animal.img}" alt="${animal.nome}"></div>
            <div class="card-content">
                <h3>${animal.nome} ${badge}</h3>
                <p>Cão, ${animal.idade}, porte ${animal.porte}. ${animal.temperamento}.</p>
                <a href="#" class="btn btn-secondary">Adote o ${animal.nome}</a>
            </div>
        </article>
    `;
};

// 3. Renderização Dinâmica (Simulação SPA)
const renderizarAnimais = () => {
    const container = document.querySelector('.card-grid');
    if (!container) return; // Proteção para rodar só na página correta

    // 3.1. Limpa o conteúdo estático no HTML
    container.innerHTML = ''; 

    // 3.2. Mapeia os dados, gera o HTML e insere no DOM (Manipulação do DOM)
    const cardsHTML = animaisParaAdocao.map(animal => animalCardTemplate(animal)).join('');
    container.innerHTML = cardsHTML;
};

// Inicializa a função de renderização após o DOM carregar
document.addEventListener('DOMContentLoaded', renderizarAnimais);