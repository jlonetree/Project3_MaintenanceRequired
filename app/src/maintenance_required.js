document.addEventListener("DOMContentLoaded", () => {
    clickProgress()
})

function clickProgress() {
    var window = window.getSelection(); 
    window.addEventListener("click", e => {

        let num = e.target.count
        if (num == 3) {
            document.getElementById("canvas3").style.zIndex = "2";  
        }

    })
}