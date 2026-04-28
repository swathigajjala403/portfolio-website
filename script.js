function toggleMode() {
    document.body.classList.toggle("dark");
}

function showMessage() {
    alert("Welcome to my portfolio!");
}

function validate() {
    let name = document.getElementById("name").value;
    if(name === "") {
        alert("Please enter your name");
    } else {
        alert("Hello " + name);
    }
}