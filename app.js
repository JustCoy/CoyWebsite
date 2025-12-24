function setupTabs() {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const topBar = button.parentElement;
            const tabsContainer = topBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`)

            topBar.querySelectorAll(".tabs__button").forEach(button =>{
                button.classList.remove("tabs__button--active");
            })

            tabsContainer.querySelectorAll(".tabs__content").forEach(tab =>{
                tab.classList.remove("tabs__content--active");
            })

            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
        })
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
})

function playJumpAround() {
    const audio = document.getElementById("JumpAround");
    audio.play().catch(error => {
        console.log("Audio Error");
    })
}

function stopAllAudio() {
    document.querySelectorAll('audio').forEach(audioElement => {
        audioElement.pause();
        audioElement.currentTime = 0;
    })
}

document.addEventListener("keydown", e => {
    console.log(e.code);
    switch(e.code) {
        case "KeyW":
            playJumpAround();
            break;
        case "Enter":
            stopAllAudio();
            break;
        default:
            break;
    }
})

function launchRocket() {
    const rocket = document.createElement("img");
    rocket.src = "./images/Rocket.gif";
    rocket.style.position = "fixed";
    rocket.style.scale = .5;
    rocket.style.left = "50%";
    rocket.style.transform = "translateX(-50%)";

    let y = document.documentElement.scrollHeight;
    let x = window.innerWidth - 800;
    const speedY = 17;
    const speedX = 3;
    rocket.style.top = y + "px";
    rocket.style.left = x + "px";
    document.body.appendChild(rocket);

    function animate(){
        y-= speedY;
        x-= speedX;

        rocket.style.top = y + "px";
        rocket.style.left = x + "px";

        if(y + rocket.height < 0){
            rocket.remove();
            return;
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

function handlePointerDown(e) {
    console.log(e.pageY);
    if(e.pageY <= 550) { 
        launchRocket();
        window.removeEventListener("pointerdown", handlePointerDown);
    }
}

window.addEventListener("pointerdown", handlePointerDown);