const responses = {
    'hola': '¡Hola! ¿Cómo estás?',
    'adiós': '¡Adiós! Que tengas un buen día.',
    'adios': '¡Adiós! Que tengas un buen día.',
    'cómo estás': 'Estoy bien, gracias por preguntar.',
    'como estas': 'Estoy bien, gracias por preguntar.',
    'qué puedes hacer': 'Puedo responder a tus preguntas básicas.',
    'que puedes hacer': 'Puedo responder a tus preguntas básicas.',
    'pregunta': 'Puedo responder a tus preguntas básicas.',
    'preguntame': 'Puedo responder a tus preguntas básicas.',
    'oye': 'Puedo responder a tus preguntas básicas.',
    'sabes': 'Puedo responder a tus preguntas básicas.',
    'qué haces': 'Puedo ayudarte con información sobre nuestros servicios y productos.',
    'que haces': 'Puedo ayudarte con información sobre nuestros servicios y productos.',
    'precio': 'Para conocer nuestros precios, por favor contáctanos a través del formulario de contacto.',
    'costos': 'Para conocer nuestros costos, por favor contáctanos a través del formulario de contacto.',
    'contacto': 'Puedes contactarnos a través del formulario en la página o enviando un email a contacto@mimarca.com',
    'servicios': 'Ofrecemos soluciones tecnológicas innovadoras, implementación rápida, seguridad empresarial y soporte 24/7.',
    'ayuda': 'Estoy aquí para ayudarte. Puedes preguntarme sobre nuestros servicios, precios o contacto.',
    'ayudame': 'Estoy aquí para ayudarte. Puedes preguntarme sobre nuestros servicios, precios o contacto.',
    'ayúdame': 'Estoy aquí para ayudarte. Puedes preguntarme sobre nuestros servicios, precios o contacto.',
    'ayúdame con': 'Estoy aquí para ayudarte. Puedes preguntarme sobre nuestros servicios, precios o contacto.',
    'quien eres': 'Soy un asistente virtual creado por MiMarca. Estoy aquí para ayudarte. Puedes preguntarme sobre nuestros servicios, precios o contacto.',
    'quien es tu creador': 'Soy un asistente virtual creado por MiMarca. Estoy aquí para ayudarte. Puedes preguntarme sobre nuestros servicios, precios o contacto.',
    'quienes son': 'Somos una empresa especializada en transformación digital. Ofrecemos soluciones tecnológicas para empresas.',
    'quienes son los creadores': 'Somos una empresa especializada en transformación digital. Ofrecemos soluciones tecnológicas para empresas.',
    'horarios': 'Estamos disponibles de lunes a viernes, de 9:00 a 18:00.',
    'horario': 'Estamos disponibles de lunes a viernes, de 9:00 a 18:00.',
    'horario de atención': 'Estamos disponibles de lunes a viernes, de 9:00 a 18:00.',
    'horario de atención al cliente': 'Estamos disponibles de lunes a viernes, de 9:00 a 18:00.',
    'horario de atención al cliente': 'Estamos disponibles de lunes a viernes, de 9:00 a 18:00.',
    'agenda': 'Estamos disponibles de lunes a viernes, de 9:00 a 18:00. llena el formulario de contacto para agendar una cita.',
    'hablamos': 'Estamos disponibles de lunes a viernes, de 9:00 a 18:00. llena el formulario de contacto para agendar una cita.',
    'hablame': 'Estamos disponibles de lunes a viernes, de 9:00 a 18:00. llena el formulario de contacto para agendar una cita.',
    'haz una cita': 'Estamos disponibles de lunes a viernes, de 9:00 a 18:00. llena el formulario de contacto para agendar una cita.',
    'información': 'Somos una empresa especializada en transformación digital. Ofrecemos soluciones tecnológicas para empresas.',
    'informacion': 'Somos una empresa especializada en transformación digital. Ofrecemos soluciones tecnológicas para empresas.',
    'gracias': '¡De nada! Estoy aquí para ayudarte cuando lo necesites.',
    'gracias por tu ayuda': '¡De nada! Fue un placer ayudarte.',
    'default': 'Lo siento, no entendí tu mensaje. Puedes preguntarme sobre nuestros servicios, precios o contacto. También puedes escribir "hola" para comenzar.'
};

const chatbotContainer = document.getElementById('chatbot-container');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

function toggleChatbot() {
    chatbotContainer.classList.toggle('active');
    if (chatbotContainer.classList.contains('active')) {
        chatbotInput.focus();
    }
}

function closeChatbot() {
    chatbotContainer.classList.remove('active');
}

function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const messageText = document.createElement('p');
    messageText.textContent = text;
    messageDiv.appendChild(messageText);
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getResponse(userMessage) {
    const normalizedMessage = userMessage.toLowerCase().trim();
    
    for (const key in responses) {
        if (normalizedMessage.includes(key)) {
            return responses[key];
        }
    }
    
    return responses['default'];
}

function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    
    if (userMessage === '') {
        return;
    }
    
    addMessage(userMessage, true);
    chatbotInput.value = '';
    
    setTimeout(() => {
        const botResponse = getResponse(userMessage);
        addMessage(botResponse, false);
    }, 500);
}

chatbotToggle.addEventListener('click', toggleChatbot);
chatbotClose.addEventListener('click', closeChatbot);
chatbotSend.addEventListener('click', sendMessage);

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

