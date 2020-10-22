const messageUrl = "http://localhost:3000/messages/"

document.addEventListener("DOMContentLoaded", () => {
    createMessage()
})

function createMessage() {
    console.log("Create Message Works")
    const messageBoard = document.querySelector("#message-board")

    const messageDisplay = document.createElement("div")
    messageDisplay.setAttribute("id", "message-display")
    
    const ul = document.createElement("ul")
    
    const username = document.createElement("li")
    username.innerText = "TrashyChan: "

    const message = document.createElement("li")
    message.innerText = "Welcome to the ThunderDome"

    const inputArea = document.createElement("div")
    inputArea.setAttribute("class", "message-input")

    let messageInput = document.createElement("input")
    messageInput.setAttribute("type", "text")
    messageInput.setAttribute("message", "message")
    messageInput.setAttribute("placeholder", "Enter message here")

    const postBtn = document.createElement("button")
    postBtn.innerText = "Send"
    postBtn.addEventListener("click", event => {
        event.preventDefault()
    })

    messageBoard.append(messageDisplay, inputArea)
    messageDisplay.append(ul)
    ul.append(username, message)
    inputArea.append(messageInput, postBtn)

}