const usernameUrl = "http://localhost:3000/usernames/"

document.addEventListener("DOMContentLoaded", () => {
    createUsername()
    // fetch(usernameUrl).then(res => res.json()).then(usernames => renderUsernames(usernames))
})

function createUsername() {
    let signIn = document.querySelector("#sign-in")
    console.log(signIn)
    
    let form = document.createElement("form")
    form.setAttribute("class", "new-user-form")

    let usernameInput = document.createElement("input")
    usernameInput.setAttribute("type", "text")
    usernameInput.setAttribute("username", "username")
    usernameInput.setAttribute("placeholder", "Please Enter Username")

    let subBtn = document.createElement("button")
    subBtn.innerText = "Continue"

    // subBtn.addEventListener("submit", event => {

    //     console.log(event.target[0].value)
    //     event.preventDefault()

    //     fetch(usernameUrl, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify({
    //             "name": event.target[0].value
    //         })
    //     })
    //     .then(res => res.json())
    // })

    signIn.append(form)
    form.append(usernameInput, subBtn)
}