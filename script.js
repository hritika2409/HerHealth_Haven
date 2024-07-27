document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chatBox');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', () => {
        sendMessage();
    });

    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    const sendMessage = () => {
        const message = chatInput.value.trim();
        if (message !== '') {
            addMessageToChat('You', message);
            chatInput.value = '';
            
            // Simulate receiving a response from the server
            setTimeout(() => {
                const response = getResponse(message);
                addMessageToChat('Doctor', response);
            }, 1000);
        }
    };

    const addMessageToChat = (sender, message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    };

    const getResponse = (message) => {
        // Simple responses based on the input
        const responses = {
            'hello': 'Hello! How can I assist you today?',
            'help': 'Sure, please tell me more about your concern.',
            'thank you': 'You\'re welcome!',
            // Add more responses as needed
        };

        const lowerCaseMessage = message.toLowerCase();
        return responses[lowerCaseMessage] || 'I\'m here to help! Could you please elaborate?';
    };
});
