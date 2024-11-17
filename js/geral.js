function openImageModal() {
    document.getElementById('imageModal').style.display = 'block';
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function selectImage(imageSrc) {
    document.getElementById('imagem-gatinho').src = imageSrc;
    closeImageModal(); // Fecha o modal após a seleção
}

// Foco

function scrollToSection() {
    document.getElementById("focus-sobre").scrollIntoView({ behavior: "smooth" });
}

function scrollToPedal() {
    document.getElementById("pedal").scrollIntoView({ behavior: "smooth" });
}

function focusonTop() {
    document.getElementById("acima").scrollIntoView({ behavior: "smooth" });
}

// soma
let contador = 0;
    const contadorSpan = document.getElementById("contador");

    // Função para atualizar o contador e exibir a bolinha
    function atualizarContador() {
        contador++;
        contadorSpan.textContent = contador;
        contadorSpan.style.display = "block"; // Exibe a bolinha vermelha
    }

    // Seleciona todos os botões "comprar"
    const botoesComprar = document.querySelectorAll("#comprar");

    // Adiciona o evento de clique em cada botão
    botoesComprar.forEach(botao => {
        botao.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o redirecionamento padrão
            atualizarContador();
        });
    });