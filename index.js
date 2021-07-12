const insert = document.getElementById("message")
console.log(document.querySelector(".btn"))
window.addEventListener('keydown',(event)=>{
    document.querySelector(".btn").style.display = "none";
    insert.innerHTML = `
        <div class="key">
            ${event.key ==' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>

        <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
        </div>

        <div class="key">
        ${event.code}
        <small>event.code</small>
        </div>`
})