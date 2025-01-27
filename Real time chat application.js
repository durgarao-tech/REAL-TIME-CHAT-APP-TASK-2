let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];


let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");
let count = 0;

sendMsgBtn.onclick = function() {
    let userInputvalue = userInput.value;
    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("msg-to-chatbot-container", "d-flex", "flex-row", "justify-content-end");
    chatContainer.appendChild(msgToChatbotContainer);

    let msgToChatBot = document.createElement("p");
    msgToChatBot.textContent = userInputvalue;
    msgToChatBot.classList.add("msg-to-chatbot");
    msgToChatbotContainer.appendChild(msgToChatBot);

    let msgFromChatBot = document.createElement("div");
    msgFromChatBot.classList.add("msg-from-chatbot");
    msgFromChatBot.textContent = chatbotMsgList[count];
    chatContainer.appendChild(msgFromChatBot);
    count += 1;

    userInput.value = "";
}