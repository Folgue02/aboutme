function gotoPersonal() {
    window.location.href = "/personal-projects.html"
}

function gotoHomepage() {
    window.location.href = "/index.html"
}

function gotoAboutMe() {
    window.location.href = "about-me.html"
}

function gotoMiniProjects() {
    window.location.href = "/mini-projects.html"
}

document.getElementById("personal-projects").addEventListener("click", () => {
    gotoPersonal()
})

document.getElementById("about-me").addEventListener("click", () => {
    gotoAboutMe()
})

document.getElementById("mini-projects").addEventListener("click", () => {
    gotoMiniProjects()
})
