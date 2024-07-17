document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let message = document.getElementById('message').value;

    // Formatar a mensagem para ser compatível com a URL do WhatsApp
    let url = `https://wa.me/5551991823420?text=${encodeURIComponent(message)}`;

    // Abrir o WhatsApp com a mensagem
    window.open(url, '_blank');
});