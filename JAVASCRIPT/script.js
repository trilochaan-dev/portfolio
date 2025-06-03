function mode() {
    const theme = document.getElementById("mode");
    const img = theme.querySelector("img");
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        img.src = "/image/darkmode.png"; 
    } else {
        img.src = "/image/lightmode.png"; 
    }
}