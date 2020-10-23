// const messageUrl = "http://localhost:3000/messages/"

// document.addEventListener("DOMContentLoaded", () => {
//     createMessage()
// })

// function createMessage() {
//     console.log("Create Message Works")
//     const messageBoard = document.querySelector("#message-board")

//     const messageDisplay = document.createElement("div")
//     messageDisplay.setAttribute("id", "message-display")
    
//     const info = document.createElement("div")
    
//     const username = document.createElement("p")
//     username.innerText = "TrashyChan: "

//     const message = document.createElement("p")
//     message.innerText = "Welcome to the ThunderDome"

//     const inputArea = document.createElement("div")
//     inputArea.setAttribute("class", "message-input")

//     let messageInput = document.createElement("input")
//     messageInput.className = 'input-box'
//     messageInput.setAttribute("type", "text")
//     messageInput.setAttribute("message", "message")
//     messageInput.setAttribute("placeholder", "Enter message here")

//     const postBtn = document.createElement("button")
//     postBtn.innerText = "Send"
//     postBtn.className = 'bttn'
//     postBtn.addEventListener('click', () => {

//         let message = document.createElement('p')
//         let icon = document.querySelector('i')

//         icon.className = 'fa fa-user-circle-o'
//         message.innerText = messageInput.value

//         info.append(message, icon)

//     })
    
//     messageBoard.append(messageDisplay, inputArea)
//     messageDisplay.append(info)
//     info.append(username, message)
//     inputArea.append(messageInput, postBtn)


// }




const messageUrl = "http://localhost:3000/messages/"
​
document.addEventListener("DOMContentLoaded", () => {
    fetch(messageUrl).then(res => res.json()).then(messages => messages.forEach(message => renderMessage(message)))
    createMessage()
    // fetch()
})
​
function renderMessage(message) {
    console.log(message.message)
    // createMessage(message)
}
​
function createMessage() {
    console.log("Create Message Works")
    const messageBoard = document.querySelector("#message-board")
    messageBoard.className = 'container'
​
    const messageDisplay = document.createElement("div")
    messageDisplay.className = 'message-container'
    messageDisplay.setAttribute("id", "message-display")
    
    const ul = document.createElement("ul")
​
    const postMessage = document.createElement("li")
    postMessage.innerText = `TrashyChan: Welcome to the ThunderDome`
​
    const inputArea = document.createElement("div")
    inputArea.setAttribute("class", "message-input")
​
    const messageForm = document.createElement("form")
    messageForm.setAttribute("class", "message-form")
​
    let messageInput = document.createElement("input")
    messageInput.setAttribute("type", "text")
    messageInput.setAttribute("message", "message")
    messageInput.setAttribute("placeholder", "Enter message here")
​
    const postBtn = document.createElement("button")
    postBtn.innerText = "Send"
    
    messageForm.addEventListener("submit", event => {
        event.preventDefault()
        
        let message = event.target[0].value
        let mess = document.createElement('p')
        info.append(message)
        
        ​
        fetch(messageUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "message": message
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
    })
​
    messageBoard.append(messageDisplay, inputArea)
    messageDisplay.append(ul)
    ul.append(postMessage)
    messageForm.append(messageInput, postBtn)
    inputArea.append(messageForm)
​
}