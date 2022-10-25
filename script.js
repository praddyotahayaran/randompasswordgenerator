const wPassEl = document.getElementById("weakPassword")
const sPassEl = document.getElementById("strongPassword")
const ssPassEl = document.getElementById("superStrongPassword")
const buttonEl = document.querySelector(".btn")
const copyEl = document.getElementById("copy")
const copyEl1 = document.getElementById("copy1")
const copyEl2 = document.getElementById("copy2")
const alertContainerEl = document.querySelector(".alertContainer")

buttonEl.addEventListener("click", () => {
    weakPassword();
    strongPassword();
    superStrongPassword();
})

copyEl.addEventListener("click", () => {
    copyPassword()
    if (wPassEl.value) {
        alertContainerEl.classList.remove("active")
        setTimeout(() => {
            alertContainerEl.classList.add("active")
        }, 3000);
    }
})

copyEl1.addEventListener("click", () => {
    copyStrongPassword()
    if (sPassEl.value) {
        alertContainerEl.classList.remove("active")
        setTimeout(() => {
            alertContainerEl.classList.add("active")
        }, 3000);
    }
})

copyEl2.addEventListener("click", () => {
    copySuperStrongPassword()
    if (ssPassEl.value) {
        alertContainerEl.classList.remove("active")
        setTimeout(() => {
            alertContainerEl.classList.add("active")
        }, 3000);
    }
})



function weakPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz"
    const passwordLength = 12;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1)
    }
    wPassEl.value = password;
}

function strongPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 14;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1)
    }
    sPassEl.value = password;
}

function superStrongPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+=_-{}[]:;',./<>?"
    const passwordLength = 16;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1)
    }
    ssPassEl.value = password;
}

function copyPassword() {
    wPassEl.select()
    wPassEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(wPassEl.value)
    
    
}

function copyStrongPassword() {
    sPassEl.select()
    sPassEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(sPassEl.value)
}

function copySuperStrongPassword() {
    ssPassEl.select()
    ssPassEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(ssPassEl.value)
}