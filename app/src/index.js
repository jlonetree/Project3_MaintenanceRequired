const usernameUrl = "http://localhost:3000/usernames"

function getUsername() {
    let canvas1 = document.querySelector("#canvas1")
    
    let form = document.createElement("form")
    form.setAttribute("class", "new-user-form")

    let usernameInput = document.createElement("input")
    usernameInput.setAttribute("type", "text")
    usernameInput.setAttribute("username", "username")
    usernameInput.setAttribute("placeholder", "Please Enter Username")

    let subBtn = document.createElement("button")
    subBtn.innerText = "Continue"

    subBtn.addEventListener("submit", event => {

        console.log(event.target[0].value)
        event.preventDefault()

        fetch(usernameUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                "name": event.target[0].value
            })
        })
        .then(res => res.json())
    })

    canvas1.append(form)
}