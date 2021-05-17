function yestojssolitairefunc() {
    var yestojssolitaire = document.getElementById("yestojssolitaire").parentElement;
    yestojssolitaire.innerHTML = '<iframe src="https://98.js.org/programs/js-solitaire/index.html">Loading...</iframe>';
}
function notojssolitairefunc()  {
    document.getElementById("notojssolitaire").classList.add("vivify", "popOut", "duration-350")
    document.getElementById("yestojssolitaire").classList.add("vivify", "popOut", "duration-350")
    setTimeout(function() {
    document.getElementById("yestojssolitaire").parentElement.innerHTML = "My favorite game is JS-Solitaire";
    }, 400)
}