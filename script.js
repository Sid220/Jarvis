window.onload = function() {
    var form = document.getElementById("form");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    document.getElementById("maininput").focus();
    setInterval(() => {
        window.scrollTo(0,document.querySelector("#container").scrollHeight);
    }, 5);    
    const battery = require("battery");
 
(async () => {
    const { level, charging } = await battery();
 
    console.log(level);
    //=> 0.8
 
    console.log(charging);
    //=> true
})();
}
function send() {
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
    var unneeded = "If you see this on Github you just won yourself 500 worthless bonus points!";
    if (filterseven[0] == "FAVORITE") {
        filterseven.splice(0, 1); 
        var fs = require('fs');
        globalThis.data = JSON.parse(fs.readFileSync('test-fun.json', 'utf8')).favorite;
    }
    else {
        var fs = require('fs');
        globalThis.data = JSON.parse(fs.readFileSync('general.json', 'utf8'));
    }
    var final = filterseven.join(" ");
    console.log(filterseven);
    function getCountryByCode(b) {
        console.log(data);
      return data.filter(
          function(data){return data.b == b}
      );
    }
    var found = getCountryByCode(final);
    if (found[0]==undefined) {
        var notfoundsearchfone = document.getElementById("maininput").value.split(" ");
        var notfoundsearch
        globalThis.notfoundsearch = notfoundsearchfone.join("%20");
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
    function requestFullScreen(element) {
        // Supports most browsers and their versions.
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    
        if (requestMethod) { // Native full screen.
            requestMethod.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
function fullscreenaniframeweather() {
    var elem = document.getElementById("weather"); // Make the body go full screen.
    requestFullScreen(elem);
}