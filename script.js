window.onload = function() {
    var form = document.getElementById("form");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    document.getElementById("maininput").focus();
    setInterval(() => {
        window.scrollTo(0,document.querySelector("#container").scrollHeight);
    }, 5);    
}
function send() {
 /*    var data = [{
        "a": "Great! Thanks for asking!",
            "b": "HOW ARE YOU"
    }, {
        "a": "Yellow, my logo's colour.",
            "b": "FAVORITE COLOUR"
    }, {
        "a": "I'm afraid I can't answer philosophical questions yet.",
            "b": "MEANING LIFE"
    }, {
        "a": "Howdy!",
            "b": "HELLO"
    }, {
        "a": "Howdy!",
            "b": "HI"
    }, {
        "a": "Howdy",
            "b": "HOWDY"
    }, {
        "a": "My name is Sid.",
            "b": "NAME"
    }, {
        "a": "<iframe src='https://www.bing.com/search?q=weather'>Loading...</iframe>",
            "b": "WEATHER"
    }]; */
    var fs = require('fs');
    var data = JSON.parse(fs.readFileSync('favorite.json', 'utf8'));
    function getCountryByCode(b) {
        console.log(data);
      return data.filter(
          function(data){return data.b == b}
      );
    }
    var filterone = document.getElementById("maininput").value.toUpperCase();
    var filtertwo = filterone.replace("?", "");
    var filterthree = filtertwo.replace(" OF", "");
    var filterfour = filterthree.replace("WHAT'S", "WHATS");
    var filterfive = filterfour.replace("WHAT IS", "WHATS");
    var filtersix = filterfive.replace("COLOR", "COLOUR");
    var filterseven = filtersix.split(" ");
    if (filterseven[0] == "WHATS") {
        for( var i = 0; i < filterseven.length; i++){ 
    
            if ( filterseven[i] === "WHATS") { 
        
                filterseven.splice(i, 1); 
                if (filterseven[0] === "YOUR" || filterseven[0] === "THE")
                filterseven.splice(0,1);
                
            }
        
        }
    }
    if (filterseven[0] == "YOUR") {
        for( var i = 0; i < filterseven.length; i++){ 
    
            if ( filterseven[i] === "YOUR") { 
        
                filterseven.splice(i, 1); 
                
            }
        
        }
    }
    var final = filterseven.join(" ");
    console.log(filterseven);
    var found = getCountryByCode(final);
    if (found[0]==undefined) {
        var notfoundsearchfone = document.getElementById("maininput").value.split(" ");
        var notfoundsearch
        globalThis.notfoundsearch = notfoundsearchfone.join("+");
        found = [{
            "a": "Hmm... I don't seem to understand. Would you like to <u><a target='blank' style='cursor:pointer' onclick='openinbrowser(notfoundsearch)'>search on Searx</a></u>?",
                "b": "ERROR"
        }];
    }
    console.log(found);
        var tr = document.createElement("TR");
        document.getElementsByTagName("TBODY")[0].appendChild(tr);
        var td = document.createElement("TD");
        td.classList.add("responsecontainer");
        td.innerHTML = '<br><br><br><img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/NYCS-bull-trans-S.svg"><p class="response vivify popInBottom duration-300">'+ found[0].a +'</p>';
        tr.appendChild(td);

        var td = document.createElement("TD");
        tr.appendChild(td);
        td.innerHTML = "<br><br><br>";
        var td = document.createElement("TD");
        td.classList.add("askcontainer");
        td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">'+ document.getElementById("maininput").value +'</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
        tr.appendChild(td);
    document.getElementById("maininput").value = null;
}
function openinbrowser(url) {
    const { shell } = require('electron')

    shell.openExternal("https://searx.nevrlands.de/searx/search?q="+ url)
    
}
