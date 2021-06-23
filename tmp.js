if(special != null) {
    console.log("dictionary");
    found = [{
        "a": "<iframe src='https://www.vestal.ml/jarvis-cloud/dictionary/index.php?word=" + document.getElementById("maininput").value + "'>Loading...</iframe>",
        "b": "DICTIONARY"
    }];
    dontrunnotfound = "yes";
    console.log(found[0].a);
}
function check() {
    if(document.getElementById("maininput").value.toUpperCase() == ("DEFINE ")) {
        document.getElementById('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to Remove." onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);" class="w3-border w3-round yesandno">Define | </button>')
        document.getElementById("maininput").value = null;
        special = "define";
    }
}