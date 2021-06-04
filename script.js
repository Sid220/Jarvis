special = null;
window.onload = function() {
    var form = document.getElementById("form");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    document.getElementById("maininput").focus();
    const battery = require("battery");
 
    (async () => {
    var { level, charging } = await battery();
        console.log(level);
        console.log(charging);
        var elem = document.getElementById("myBar"); 
        if (charging == false){globalThis.elemInnerHTML = level * 100  + '%';}
        else {globalThis.elemInnerHTML = "<i class='bi bi-lightning-charge-fill'></i> " + level * 100  + '%';}
        if (elem.style.width == "100%"){elem.style.borderBottomRightRadius = "4px"; elem.style.borderTopRightRadius = "4px";}
        else {elem.style.borderBottomRightRadius = "0"; elem.style.borderTopRightRadius = "0";}
        elem.style.width = level * 100 + '%'; 
        elem.innerHTML = elemInnerHTML;
    })();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    date = new Date();
    document.getElementById("time").innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getHours() + ":" + date.getMinutes();
    setInterval(() => {
        window.scrollTo(0,document.querySelector("#container").scrollHeight);
    }, 5);    
    setInterval(() => {
        const battery = require("battery");
 
        (async () => {
        var { level, charging } = await battery();
            var elem = document.getElementById("myBar"); 
            if (charging == false){globalThis.elemInnerHTML = level * 100  + '%';}
            else {globalThis.elemInnerHTML = "<i class='bi bi-lightning-charge-fill'></i> " + level * 100  + '%';}
            if (elem.style.width == "100%"){elem.style.borderBottomRightRadius = "4px"; elem.style.borderTopRightRadius = "4px";}
            else {elem.style.borderBottomRightRadius = "0"; elem.style.borderTopRightRadius = "0";}
            elem.style.width = level * 100 + '%'; 
            elem.innerHTML = elemInnerHTML;
        })();
    }, 30000);
    setInterval(() => {
        if(date.getMinutes < 10) {
            globalThis.minute = "0" + date.getMinutes(); 
        }
        else {
            globalThis.minute = date.getMinutes();
        }
        date = new Date();
        document.getElementById("time").innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getHours() + ":" + minute;
    }, 2000);
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
    var final = filterseven.join(" ");
    console.log(filterseven);
    function getCountryByCode(b) {
        console.log(data);
      return data.filter(
          function(data){return data.b == b}
      );
    }
    if(filterseven[0]=="FAVORITE") {
    var fs = require('fs');
    data = JSON.parse(fs.readFileSync('test-fun.json', 'utf8')).favorite;
    filterseven.splice(0,1);
    var final = filterseven.join(" ");
    }
    else {
        var fs = require('fs');
    data = JSON.parse(fs.readFileSync('general.json', 'utf8'));
    }
    if(special != null) {
        if(special == "define"){
        console.log("dictionary");
        found = [{
            "a": "<iframe src='https://www.sidprojects.ml/jarvis-cloud/dictionary/index.php?word=" + document.getElementById("maininput").value + "'>Loading...</iframe>",
            "b": "DICTIONARY"
        }];
    }
    if(special == "lookup"){
        console.log("lookup");
        found = [{
            "a": "<iframe id='lookupiframe' src='https://www.bing.com/search?q=" + document.getElementById("maininput").value + "'>Loading...</iframe><br>Search by <a href='https://www.bing.com'>Bing</a> <button class='yesandno w3-border w3-round' onClick='fullscreenaniframelookup()'><i class='bi bi-fullscreen'></i></button> <button class='yesandno w3-border w3-round' onClick='openinbrowser(this.parentElement.firstChild.src)'><i class='bi bi-box-arrow-up-right'></i></button>",
            "b": "LOOKUP"
        }];
    }
    }
    else {
    found = getCountryByCode(final);
    }
    if (found[0]==undefined) {
        var notfoundsearchfone = document.getElementById("maininput").value.split(" ");
        var notfoundsearch
        globalThis.notfoundsearch = "https://www.bing.com/search?q=" + notfoundsearchfone.join("%20");
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
        if(special != null){
            td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">'+ special + " " + document.getElementById("maininput").value +'</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
        }
        else {
            td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">'+ document.getElementById("maininput").value +'</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
        }
        tr.appendChild(td);
        // Clean up
        document.getElementById("maininput").value = null;
        special = null;
        if (document.getElementById('form').firstChild.id == "special") {
            document.getElementById("special").remove();
        }
}
function openinaniframe(url, lookup) {
    var tr = document.createElement("TR");
    document.getElementsByTagName("TBODY")[0].appendChild(tr);
    var td = document.createElement("TD");
    td.classList.add("responsecontainer");
    td.innerHTML = '<br><br><br><img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/NYCS-bull-trans-S.svg"><p class="response vivify popInBottom duration-300"><iframe id="lookupclick" src="'+ url +'">Loading...</iframe><br>Search by <a href="https://www.bing.com">Bing</a> <button class="yesandno w3-border w3-round" onClick="fullscreenaniframelookupclick()"><i class="bi bi-fullscreen"></i></button> <button class="yesandno w3-border w3-round" onClick="openinbrowser(`'+ url +'`)"><i class="bi bi-box-arrow-up-right"></i></button>';
    tr.appendChild(td);

    var td = document.createElement("TD");
    tr.appendChild(td);
    td.innerHTML = "<br><br><br>";
    var td = document.createElement("TD");
    td.classList.add("askcontainer");
    td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">'+ "lookup " + lookup +'</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
    tr.appendChild(td);
}
function lookupinadictionary(query) {
    var tr = document.createElement("TR");
    document.getElementsByTagName("TBODY")[0].appendChild(tr);
    var td = document.createElement("TD");
    td.classList.add("responsecontainer");
    td.innerHTML = '<br><br><br><img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/NYCS-bull-trans-S.svg"><p class="response vivify popInBottom duration-300"><iframe id="dicclick" src="https://www.sidprojects.ml/jarvis-cloud/dictionary/index.php?word='+ query +'">Loading...</iframe><br>Vestal Dictionary <button class="yesandno w3-border w3-round" onClick="fullscreenaniframedicclick()"><i class="bi bi-fullscreen"></i></button> <button class="yesandno w3-border w3-round" onClick="openinbrowser(`https://www.sidprojects.ml/jarvis-cloud/dictionary/index.php?word='+ query +'`)"><i class="bi bi-box-arrow-up-right"></i></button>';
    tr.appendChild(td);

    var td = document.createElement("TD");
    tr.appendChild(td);
    td.innerHTML = "<br><br><br>";
    var td = document.createElement("TD");
    td.classList.add("askcontainer");
    td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">'+ "define " + query +'</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
    tr.appendChild(td);
}
function openinbrowser(url) {
    const { shell } = require('electron')

    shell.openExternal(url)
    
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
    var elem = document.getElementById("weather"); // Make the weather go full screen.
    requestFullScreen(elem);
}
function fullscreenaniframeemoji() {
    var elem = document.getElementById("picker"); // Make the picker go full screen.
    requestFullScreen(elem);
}
function fullscreenaniframe98() {
    var elem = document.getElementById("desktop"); // Make the desktop go full screen.
    requestFullScreen(elem);
}
function fullscreenaniframelookupclick() {
    var elem = document.getElementById("lookupclick"); // Make lookupclick go full screen.
    requestFullScreen(elem);
}
function fullscreenaniframedicclick() {
    var elem = document.getElementById("dicclick"); // Make dictionary go full screen.
    requestFullScreen(elem);
}
function fullscreenaniframelookup() {
    var elem = document.getElementById("lookupiframe"); // Make dictionary go full screen.
    requestFullScreen(elem);
}
function check() {
    if(document.getElementById("maininput").value.toUpperCase() == ("DEFINE ")) {
        document.getElementById('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to Remove." onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);" class="w3-border w3-round yesandno" id="special">Define | </button>')
        document.getElementById("maininput").value = null;
        special = "define";
    }
    if(document.getElementById("maininput").value.toUpperCase() == ("LOOKUP ")) {
        document.getElementById('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to Remove." onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);" class="w3-border w3-round yesandno" id="special">Lookup | </button>')
        document.getElementById("maininput").value = null;
        special = "lookup";
    }
}