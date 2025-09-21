// script.js

const SPLASH_DURATION = 1500; // 3 segundos de mensagem
const TRANSITION_DURATION = 500; // 2 segundos de transição

// Variável para armazenar o ID do setInterval, 
// para que possamos pará-lo depois.
let loadingInterval; 

function startLoadingEffect() {
    const loadingElement = document.getElementById('loading-text');
    const baseText = loadingElement.textContent.trim(); // "Carregando o conteúdo"

    // Inicia a contagem dos pontos e a repetição a cada 500ms
    loadingInterval = setInterval(() => {
        
        let currentText = loadingElement.textContent;
        let dots = (currentText.match(/\./g) || []).length; // Conta quantos pontos existem

        if (dots < 3) {
            // Se tiver menos de 3 pontos, adiciona um
            loadingElement.textContent += '.';
        } else {
            // Se tiver 3 pontos, reseta para o texto base
            loadingElement.textContent = baseText;
        }

    }, 275); // Roda a cada meio segundo (500ms)
}

function stopLoadingEffect() {
    // Para a repetição
    clearInterval(loadingInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // 1. INICIA O EFEITO DE CARREGAMENTO ASSIM QUE A PÁGINA ESTIVER PRONTA
    startLoadingEffect(); 

    setTimeout(() => {
        // 2. PARA O EFEITO DE CARREGAMENTO ANTES DE SUMIR COM O SPLASH
        stopLoadingEffect();
        
        // A) Inicia o FADE-OUT da tela de splash
        splashScreen.classList.add('fade-out');

        // B) Inicia o FADE-IN do conteúdo principal
        if (mainContent.classList.contains('hidden')) {
            mainContent.classList.remove('hidden');
        }

        // 3. LIMPEZA: Espera o tempo da transição
        setTimeout(() => {
            splashScreen.style.display = 'none'; 
        }, TRANSITION_DURATION); 

    }, SPLASH_DURATION); 

});