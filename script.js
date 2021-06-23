special = null;
function byId(laid) {
    return document.getElementById(laid);
}
window.onload = function() {
    getText("https://www.vestal.ml/jarvis-cloud/change.json");
    async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
          data = JSON.parse(myText);
        console.log(data);
        document.body.style.backgroundImage = `url("${data[0].cdn}")`;
      }
    var form = byId("form");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    byId("maininput").focus();
    const battery = require("battery");
 
    (async () => {
    var { level, charging } = await battery();
        console.log(level);
        console.log(charging);
        var elem = byId("myBar"); 
        if (charging == false){globalThis.elemInnerHTML = level * 100  + '%';}
        else {globalThis.elemInnerHTML = "<i class='fa fa-bolt'></i> " + level * 100  + '%';}
        if (elem.style.width == "100%"){elem.style.borderBottomRightRadius = "4px"; elem.style.borderTopRightRadius = "4px";}
        else {elem.style.borderBottomRightRadius = "0"; elem.style.borderTopRightRadius = "0";}
        elem.style.width = level * 100 + '%'; 
        elem.innerHTML = elemInnerHTML;
    })();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    date = new Date();
    byId("time").innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getHours() + ":" + date.getMinutes();
    setInterval(() => {
        window.scrollTo(0,document.querySelector("#container").scrollHeight);
    }, 5);
    async function getVolume() {
        const loudness = require('loudness');
         
        var vol = await loudness.getVolume()
        if(vol <= 20 && await loudness.getMuted() != true) {
            byId("volume").innerHTML = '<i class="fa fa-volume-down" style="font-size:20px;"></i>';
        }
        if(vol > 20 && await loudness.getMuted() != true) {
            byId("volume").innerHTML = '<i class="fa fa-volume-up" style="font-size:20px;"></i>';
        }
        if(await loudness.getMuted() == true) {
            byId("volume").innerHTML = '<i class="fa fa-volume-mute" style="font-size:20px;"></i>';
        }
    };
    getVolume();
    setInterval(() => {
        const battery = require("battery");
 
        (async () => {
        var { level, charging } = await battery();
            var elem = byId("myBar"); 
            if (charging == false){globalThis.elemInnerHTML = level * 100  + '%';}
            else {globalThis.elemInnerHTML = "<i class='fa fa-bolt'></i> " + level * 100  + '%';}
            if (elem.style.width == "100%"){elem.style.borderBottomRightRadius = "4px"; elem.style.borderTopRightRadius = "4px";}
            else {elem.style.borderBottomRightRadius = "0"; elem.style.borderTopRightRadius = "0";}
            elem.style.width = level * 100 + '%'; 
            elem.innerHTML = elemInnerHTML;
        })();
    }, 30000);
    setInterval(() => {
        if(date.getMinutes() < 10) {
            globalThis.minute = "0" + date.getMinutes(); 
        }
        else {
            globalThis.minute = date.getMinutes();
        }
        date = new Date();
        byId("time").innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getHours() + ":" + minute;
        getVolume();
    }, 2000);
    const electron = require('electron');
    const path = require('path');
    const dialog = electron.remote.dialog;
      
    var showBox = document.getElementById('poweroff');
      
    showBox.addEventListener('click', (event) => {
        // Resolves to a Promise<Object>
        dialog.showMessageBox({
            // option Object
            type: 'warning',
            buttons: [],
            defaultId: 0,
            icon: '',
            title: 'Confirm Action',
            message: 'Are you sure you want to power-off your computer?',
            cancelId: 0,
            buttons: ["Cancel", "OK"], noLink: true, defaultId: 0,
            noLink: false,
            normalizeAccessKeys: false,
        }).then(box => {
            if(box.response == 1) {
            poweroff();
            }
            else {
                console.log("canceled");
            }
    }).catch(err => {
            console.log(err)
        }); 
    });
    getVer("https://www.vestal.ml/jarvis-cloud/version.json");
    async function getVer(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
          data = JSON.parse(myText);
        console.log(data);
        if(data.version != "0.0.1" && localStorage.getItem("noupdate") != "yes") {
       byId("message").classList.add("w3-yellow");
       byId("message").children[1].innerHTML = '<i class="fas fa-exclamation"></i> Annoying Warning:';
       byId("message").children[2].innerHTML = 'You are using and outdated version of Jarvis - Please update!';
       byId("message").style.display = "block";
      }
    }
}
function send() {
    var filterone = byId("maininput").value.toUpperCase();
    var filtertwo = filterone.replace("?", "").replace("I'M", "IM");
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
    data = JSON.parse(fs.readFileSync('fun.json', 'utf8')).favorite;
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
            "a": "<iframe src='https://www.vestal.ml/jarvis-cloud/dictionary/index.php?word=" + byId("maininput").value + "'>Loading...</iframe>",
            "b": "DICTIONARY"
        }];
    }
    if(special == "lookup"){
        console.log("lookup");
        found = [{
            "a": "<iframe id='lookupiframe' src='https://www.bing.com/search?q=" + byId("maininput").value + "'>Loading...</iframe><br>Search by <a href='https://www.bing.com'>Bing</a> <button class='yesandno w3-border w3-round' onClick='fullscreensomethin(`lookupiframe`)'><i class='fa fa-expand'></i></button> <button class='yesandno w3-border w3-round' onClick='openinbrowser(this.parentElement.firstChild.src)'><i class='fas fa-external-link-alt'></i></button>",
            "b": "LOOKUP"
        }];
    }
    if(special == "open"){
        console.log("open");
        openapp(byId("maininput").value.replace(" ","-").toLowerCase());
        found = [{
            "a": "Opening "+ byId("maininput").value + "...",
            "b": "DICTIONARY"
        }];
    }
    }
    else {
    found = getCountryByCode(final);
    }
    if (found[0]==undefined) {
        notfoundsearchfone = byId("maininput").value.split(" ");
        var notfoundsearch
        globalThis.notfoundsearch = "https://www.bing.com/search?q=" + notfoundsearchfone.join("%20");
        found = [{
            "a": "Hmm... I don't seem to understand. Would you like to <u><a target='blank' style='cursor:pointer' onclick='openinaniframe(notfoundsearch, notfoundsearchfone.join(` `))'>search on Bing</a></u>?",
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
            td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">'+ special + " " + byId("maininput").value +'</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
        }
        else {
            td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">'+ byId("maininput").value +'</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
        }
        tr.appendChild(td);
        // Clean up
        byId("maininput").value = null;
        special = null;
        if (byId('form').firstChild.id == "special") {
            byId("special").remove();
        }
}
function openinaniframe(url, lookup) {
    var tr = document.createElement("TR");
    document.getElementsByTagName("TBODY")[0].appendChild(tr);
    var td = document.createElement("TD");
    td.classList.add("responsecontainer");
    td.innerHTML = '<br><br><br><img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/NYCS-bull-trans-S.svg"><p class="response vivify popInBottom duration-300"><iframe id="lookupclick" src="'+ url +'">Loading...</iframe><br>Search by <a href="https://www.bing.com">Bing</a> <button class="yesandno w3-border w3-round" onClick="fullscreensomethin(`lookupclick`)"><i class="fa fa-expand"></i></button> <button class="yesandno w3-border w3-round" onClick="openinbrowser(`'+ url +'`)"><i class="fas fa-external-link-alt"></i></button>';
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
    td.innerHTML = '<br><br><br><img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/NYCS-bull-trans-S.svg"><p class="response vivify popInBottom duration-300"><iframe id="dicclick" src="https://www.vestal.ml/jarvis-cloud/dictionary/index.php?word='+ query +'">Loading...</iframe><br>Vestal Dictionary <button class="yesandno w3-border w3-round" onClick="fullscreensomethin(`dicclick`)"><i class="fa fa-expand"></i></button> <button class="yesandno w3-border w3-round" onClick="openinbrowser(`https://www.vestal.ml/jarvis-cloud/dictionary/index.php?word='+ query +'`)"><i class="fas fa-external-link-alt"></i></button>';
    tr.appendChild(td);

    var td = document.createElement("TD");
    tr.appendChild(td);
    td.innerHTML = "<br><br><br>";
    var td = document.createElement("TD");
    td.classList.add("askcontainer");
    td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">'+ "define " + query +'</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
    tr.appendChild(td);
}
function cleanup() {
    special = null;
}
function openinbrowser(url) {
    const { shell } = require('electron');
    shell.openExternal(url);
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
function fullscreensomethin(id) {
    var elem = byId(id);
    requestFullScreen(elem);
}
function check() {
    if (byId('form').firstChild.id != "special") {
    if(byId("maininput").value.toUpperCase() == ("DEFINE ")) {
        byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to Remove." onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-round yesandno" id="special">Define | </button>');
        byId("maininput").value = null;
        special = "define";
    }
    if(byId("maininput").value.toUpperCase() == ("LOOKUP ")) {
        byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to Remove." onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-round yesandno" id="special">Lookup | </button>');
        byId("maininput").value = null;
        special = "lookup";
    }
    if(byId("maininput").value.toUpperCase() == ("OPEN ")) {
        byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to Remove." onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-round yesandno" id="special">Open | </button>');
        byId("maininput").value = null;
        special = "open";
    }
}
byId("maininput").addEventListener('keydown', function (e) {
    if(e.key == "Backspace" && byId("maininput").value == "" && special != null) {
        if (byId('form').firstChild.id == "special") {
        byId('form').firstChild.remove();
        cleanup();
        }
    }
   }, false);
}
function openapp(app) {
const exec = require('child_process').exec;

function execute(command, callback) {
    exec(command, (error, stdout, stderr) => { 
        callback(stdout); 
    });
};

// call the function
execute(app, (output) => {
    console.log(output);
});
}
// WARNING: This function **WILL** turn off your computer
function poweroff() {
    var powerOff = require('power-off');
    
    powerOff( function (err, stderr, stdout) {
    if(!err && !stderr) {
        console.log(stdout);
    }
    });
}