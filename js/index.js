let data = document.getElementById("inputText");

document.getElementById("buttonText").addEventListener('click', () => {
    localStorage.setItem("data", data.value);
    console.log(localStorage.getItem("data"));
})
