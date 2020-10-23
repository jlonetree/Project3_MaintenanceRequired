const messageUrl = "http://localhost:3000/messages/"

document.addEventListener("DOMContentLoaded", () => {
    createMessage()
})

function createMessage() {
    console.log("Create Message Works")
    const messageBoard = document.querySelector("#message-board")

    const messageDisplay = document.createElement("div")
    messageDisplay.setAttribute("id", "message-display")
    
    const info = document.createElement("div")
    
    const username = document.createElement("p")
    username.innerText = "TrashyChan: "

    const message = document.createElement("p")
    message.innerText = "Welcome to the ThunderDome"
    message.className = ''

    const inputArea = document.createElement("div")
    inputArea.setAttribute("class", "message-input")

    let messageInput = document.createElement("input")
    messageInput.className = 'input-box'
    messageInput.setAttribute("type", "text")
    messageInput.setAttribute("message", "message")
    messageInput.setAttribute("placeholder", "Enter message here")

    const postBtn = document.createElement("button")
    postBtn.innerText = "Send"
    postBtn.className = 'bttn'
    postBtn.addEventListener('click', () => {

        let message = document.createElement('p')
        let icon = document.querySelector('i')

        icon.className = 'fa fa-user-circle-o'
        message.innerText = messageInput.value

        info.append(message, icon)

    })
    
    messageBoard.append(messageDisplay, inputArea)
    messageDisplay.append(info)
    info.append(username, message)
    inputArea.append(messageInput, postBtn)


}