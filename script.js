document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do DOM
    const menuIcon = document.querySelector('.menu-icon-container');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.main-content section');

    // Ação de clique para o ícone do menu para alternar a barra lateral
    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mainContent.classList.toggle('shifted');
    });

    // Adiciona um event listener ao conteúdo principal para fechar a barra lateral
    mainContent.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            mainContent.classList.remove('shifted');
        }
    });

    /**
     * Mostra uma seção específica e esconde as outras.
     * @param {string} targetId - O ID da seção a ser exibida (ex: '#sobre').
     */
    function showSection(targetId) {
        // Esconde todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Mostra a seção alvo, se não for a página inicial
        if (targetId !== '#home') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        }
    }

    // Adiciona um event listener a cada link da barra lateral
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            const targetId = this.getAttribute('href');
            showSection(targetId);
            
            // Fecha a barra lateral após clicar em um link
            sidebar.classList.remove('open');
            mainContent.classList.remove('shifted');
        });
    });

    // Garante que nenhuma seção esteja visível ao carregar a página (apenas o cabeçalho)
    showSection('#home');
});
