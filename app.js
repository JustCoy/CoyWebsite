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