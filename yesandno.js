function yestojssolitairefunc() {
    var yestojssolitaire = document.getElementById("yestojssolitaire").parentElement;
    yestojssolitaire.innerHTML = "<iframe id='jssoltaire' src='https://www.vestal.ml/jarvis-cloud/98.js.org/programs/js-solitaire/'>Loading...</iframe><br>JSSolitaire by <a href='https://github.com/rjanjic'>rjanjic</a> <button class='yesandno w3-border w3-round' onClick='fullscreensomethin(`jssoltaire`)'><i class='fa fa-expand'></i></button> <button class='yesandno w3-border w3-round' onClick='openinbrowser(`https://98.js.org/programs/js-solitaire/index.html`)'><i class='fas fa-external-link-alt'></i></button>";
}
function notojssolitairefunc()  {
    document.getElementById("notojssolitaire").classList.add("vivify", "popOut", "duration-350")
    document.getElementById("yestojssolitaire").classList.add("vivify", "popOut", "duration-350")
    setTimeout(function() {
    document.getElementById("yestojssolitaire").parentElement.innerHTML = "My favorite game is JS-Solitaire";
    }, 400)
}
function yestotheriverfunc() {
    byId("yestotheriver").parentElement.innerHTML = "<audio src='https://nebcoradio.com:8443/WXRV' controls autoplay></audio>";
}
function nototheriverfunc()  {
    // How could you ever say no to 92.5 the river?
    document.getElementById("nototheriver").classList.add("vivify", "popOut", "duration-350")
    document.getElementById("yestotheriver").classList.add("vivify", "popOut", "duration-350")
    setTimeout(function() {
        byId("yestotheriver").parentElement.innerHTML = "I like 92.5 The River";
    }, 400)
}
function yestogamefunc() {
    byId("yestogame").parentElement.innerHTML = "<iframe id='game' src='./games/game.html'>Loading...</iframe><br><button class='yesandno w3-border w3-round' onClick='fullscreensomethin(`game`)'><i class='fa fa-expand'></i></button> <button class='yesandno w3-border w3-round' onClick='openinbrowser(this.parentElement.firstChild.contentWindow.location.href)'><i class='fas fa-external-link-alt'></i></button>";
}
function notogamefunc() {
    document.getElementById("notogame").classList.add("vivify", "popOut", "duration-350")
    document.getElementById("yestogame").classList.add("vivify", "popOut", "duration-350")
    setTimeout(function() {
        byId("yestogame").parentElement.innerHTML = "I'm sorry to hear that ☹️";
    }, 400)
}