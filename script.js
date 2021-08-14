byId('loading-details').innerHTML = 'Loaded the HTML';
const { lookup } = require("dns");
const { from } = require("responselike");
console.warn("%cWARNING:\n%c\"Give us a break!\"\n%cDO NOT:%cCopy and paste code you don't understand!!!\nThis can mess up your installation, OR EVEN YOUR COMPUTER!%c\"Don't do it!\"%c\n\nAny GitHub issues created by idiots who copied and pasted code will be ignored! Have Fun!", "font-size: 100px; color: red;", "color:black;font-size:45px", "text-decoration: underline;font-weight: bold;color:black;font-size:30px", "color:black;font-size:30px","font-size:45px;color:black", "color:black;");
special = null;
function byId(laid) {
    return document.getElementById(laid);
}
byId('loading-details').innerHTML = 'Loaded the JS';
window.onload = function () {    
    byId('loading-details').innerHTML = 'Loading the background image';
    getText("https://www.vestal.ml/jarvis-cloud/change.json");

    var fs = require('fs');
    prefs = JSON.parse(fs.readFileSync('prefs.json', 'utf8'));

        // Load extensions
    for (let i = 0; i < prefs.extensions.length; i++) { 
            var script = document.createElement("script");  // create a script DOM node
            script.src = "./exts/" + prefs.extensions[i].name + "/jarvis-main.js";  // set its src to the provided URL
        
            document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
        }

    booklocvar = prefs.bookloc;
    function bookloc(booklocvars, url) {
        if(booklocvars == "self") {
            window.location.href = url;
        }
        if(booklocvars == "browser") {
            openinbrowser(url)
        }
        else {
            window.open(url, "_blank");
        }
    }
    if (prefs.bookmarks[0].name != null) {
        if (prefs.bookmarks[0].icon.includes("FONTAWESOME:") == true) {
          oneicon = "<i class='" + prefs.bookmarks[0].icon.split(":")[1] + "'></i>";
        }
        else {
          oneicon = "<img style='width: 15px; height: 15px; border-radius: 50%' src='" + prefs.bookmarks[0].icon + "'>"
        }
        document.getElementById("book-one").innerHTML = oneicon + " " + prefs.bookmarks[0].name;
        document.getElementById("book-one").title = prefs.bookmarks[0].name;
        document.getElementById("book-one").addEventListener('click', function() {bookloc(booklocvar, prefs.bookmarks[0].url)})
      }
    if (prefs.bookmarks[1].name != null) {
        if (prefs.bookmarks[1].icon.includes("FONTAWESOME:") == true) {
          oneicon = "<i class='" + prefs.bookmarks[1].icon.split(":")[1] + "'></i>";
        }
        else {
          oneicon = "<img style='width: 15px; height: 15px; border-radius: 50%' src='" + prefs.bookmarks[1].icon + "'>"
        }
        document.getElementById("book-two").innerHTML = oneicon + " " + prefs.bookmarks[1].name;
        document.getElementById("book-two").title = prefs.bookmarks[1].name;
       document.getElementById("book-two").addEventListener('click', function() {bookloc(booklocvar, prefs.bookmarks[1].url)})
      }
      if (prefs.bookmarks[2].name != null) {
        if (prefs.bookmarks[2].icon.includes("FONTAWESOME:") == true) {
          oneicon = "<i class='" + prefs.bookmarks[2].icon.split(":")[1] + "'></i>";
        }
        else {
          oneicon = "<img style='width: 15px; height: 15px; border-radius: 50%' src='" + prefs.bookmarks[2].icon + "'>"
        }
        document.getElementById("book-three").innerHTML = oneicon + " " + prefs.bookmarks[2].name;
        document.getElementById("book-three").title = prefs.bookmarks[2].name;
        document.getElementById("book-three").addEventListener('click', function() {bookloc(booklocvar, prefs.bookmarks[2].url)})
      }
      if (prefs.bookmarks[3].name != null) {
        if (prefs.bookmarks[3].icon.includes("FONTAWESOME:") == true) {
          oneicon = "<i class='" + prefs.bookmarks[3].icon.split(":")[1] + "'></i>";
        }
        else {
          oneicon = "<img style='width: 15px; height: 15px; border-radius: 50%' src='" + prefs.bookmarks[3].icon + "'>"
        }
        document.getElementById("book-four").innerHTML = oneicon + " " + prefs.bookmarks[3].name;
        document.getElementById("book-four").title = prefs.bookmarks[3].name;
document.getElementById("book-four").addEventListener('click', function() {bookloc(booklocvar, prefs.bookmarks[3].url)})
      }
      if (prefs.bookmarks[4].name != null) {
        if (prefs.bookmarks[4].icon.includes("FONTAWESOME:") == true) {
          oneicon = "<i class='" + prefs.bookmarks[4].icon.split(":")[1] + "'></i>";
        }
        else {
          oneicon = "<img style='width: 15px; height: 15px; border-radius: 50%' src='" + prefs.bookmarks[4].icon + "'>"
        }
        document.getElementById("book-five").innerHTML = oneicon + " " + prefs.bookmarks[4].name;
        document.getElementById("book-five").title = prefs.bookmarks[4].name;
        document.getElementById("book-five").addEventListener('click', function() {bookloc(booklocvar, prefs.bookmarks[4].url)})
        }

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
    const battery = require("battery");
    byId('loading-details').innerHTML = 'Getting battery info';
    (async () => {
        var { level, charging } = await battery();
        console.log(level);
        console.log(charging);
        var elem = byId("myBar");
        if (charging == false) { globalThis.elemInnerHTML = level * 100 + '%'; }
        else { globalThis.elemInnerHTML = "<i class='fa fa-bolt'></i> " + level * 100 + '%'; }
        if (elem.style.width == "100%") { elem.style.borderBottomRightRadius = "4px"; elem.style.borderTopRightRadius = "4px"; }
        else { elem.style.borderBottomRightRadius = "0"; elem.style.borderTopRightRadius = "0"; }
        elem.style.width = level * 100 + '%';
        elem.innerHTML = elemInnerHTML;
    })();
    byId('loading-details').innerHTML = 'Getting the time';
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    date = new Date();
    byId("time").innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getHours() + ":" + date.getMinutes();
    setInterval(() => {
        window.scrollTo(0, document.querySelector("#container").scrollHeight);
    }, 5);
    byId('loading-details').innerHTML = 'Getting the volume';
    async function getVolume() {
        const loudness = require('loudness');

        var vol = await loudness.getVolume()
        if (vol <= 20 && await loudness.getMuted() != true) {
            byId("volume").innerHTML = '<i class="fa fa-volume-down" style="font-size:20px;"></i>';
        }
        if (vol > 20 && await loudness.getMuted() != true) {
            byId("volume").innerHTML = '<i class="fa fa-volume-up" style="font-size:20px;"></i>';
        }
        if (await loudness.getMuted() == true) {
            byId("volume").innerHTML = '<i class="fa fa-volume-mute" style="font-size:20px;"></i>';
        }
    };
    getVolume();
    setInterval(() => {
        const battery = require("battery");

        (async () => {
            var { level, charging } = await battery();
            var elem = byId("myBar");
            if (charging == false) { globalThis.elemInnerHTML = level * 100 + '%'; }
            else { globalThis.elemInnerHTML = "<i class='fa fa-bolt'></i> " + level * 100 + '%'; }
            if (elem.style.width == "100%") { elem.style.borderBottomRightRadius = "4px"; elem.style.borderTopRightRadius = "4px"; }
            else { elem.style.borderBottomRightRadius = "0"; elem.style.borderTopRightRadius = "0"; }
            elem.style.width = level * 100 + '%';
            elem.innerHTML = elemInnerHTML;
        })();
    }, 30000);
    setInterval(() => {
        if (date.getMinutes() < 10) {
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
            if (box.response == 1) {
                poweroff();
            }
            else {
                console.log("canceled");
            }
        }).catch(err => {
            console.log(err)
        });
    });
    byId('loading-details').innerHTML = 'Checking Version';
    getVer("https://www.vestal.ml/jarvis-cloud/version.json");
    async function getVer(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
        data = JSON.parse(myText);
        console.log(data);
        if (data.version != "0.0.1" && localStorage.getItem("noupdate") != "yes") {
            byId("message").classList.add("w3-yellow");
            byId("message").children[1].innerHTML = '<i class="fas fa-exclamation"></i> Annoying Warning:';
            byId("message").children[2].innerHTML = 'You are using and outdated version of Jarvis - Please update!';
            byId("message").style.display = "block";
        }
    }
   byId('cover').remove();
}
function send() {
    var filterone = byId("maininput").value.toUpperCase();
    var filtertwo = filterone.replace("?", "").replace("I'M", "IM").replace(" R ", " ARE ").replace(" U ", " YOU ");
    var filterthree = filtertwo.replace(" OF", "");
    var filterfour = filterthree.replace("WHAT'S", "WHATS");
    var filterfive = filterfour.replace("WHAT IS", "WHATS");
    var filtersix = filterfive.replace("COLOR", "COLOUR");
    var filterseven = filtersix.split(" ");
    if (filterseven[0] == "WHAT" || filterseven[0] == "TELL") {
        filterseven.splice(0, 1);
        if (filterseven[0] === "IS") {
            filterseven.splice(0, 1);
        }
        if (filterseven[0] === "THE") {
            filterseven.splice(0, 1);
        }
        if (filterseven[0] === "ME") {
            filterseven.splice(0, 1);
            if (filterseven[0] === "THE") {
                filterseven.splice(0, 1);
            }
        }
    }
    if (filterseven[0] == "WHATS") {
        filterseven.splice(0, 1);
        if (filterseven[0] === "YOUR" || filterseven[0] === "THE") {
            filterseven.splice(0, 1);
        }

    }
    var unneeded = "If you see this on Github you just won yourself 500 worthless bonus points!";
    var final = filterseven.join(" ");
    console.log(filterseven);
    function getCountryByCode(b) {
        console.log(data);
        return data.filter(
            function (data) { return data.b == b }
        );
    }
    if (filterseven[0] == "FAVORITE") {
        var fs = require('fs');
        data = JSON.parse(fs.readFileSync('fun.json', 'utf8')).favorite;
        filterseven.splice(0, 1);
        var final = filterseven.join(" ");
    }
    else {
        var fs = require('fs');
        data = JSON.parse(fs.readFileSync('general.json', 'utf8'));
    }
    if (special != null) {
        specialBoolean = 1;
        if (special == "define") {
            console.log("dictionary");
            found = [{
                "a": "<iframe src='https://www.vestal.ml/jarvis-cloud/dictionary/index.php?word=" + byId("maininput").value + "'>Loading...</iframe>",
                "b": "DICTIONARY"
            }];
        }
        if (special == "lookup") {
            console.log("lookup");
            found = [{
                "a": "<iframe id='lookupiframe' src='https://www.bing.com/search?q=" + byId("maininput").value + "'>Loading...</iframe><br>Search by <a href='https://www.bing.com'>Bing</a> <button class='yesandno w3-border w3-round' onClick='fullscreensomethin(`lookupiframe`)'><i class='fa fa-expand'></i></button> <button class='yesandno w3-border w3-round' onClick='openinbrowser(this.parentElement.firstChild.src)'><i class='fas fa-external-link-alt'></i></button>",
                "b": "LOOKUP"
            }];
        }
        if (special == "open") {
            console.log("open");
            openapp(byId("maininput").value.replace(" ", "-").toLowerCase());
            found = [{
                "a": "Opening " + byId("maininput").value + "...",
                "b": "OPEN"
            }];
        }
        if (special == "timer") {
            console.log("timer");
            if (byId("maininput").value.toUpperCase().includes("MINUTE") == true) {
                if (isNaN(byId("maininput").value[0]) == false && byId("maininput").value[0] != " ") {
                    finaltime = byId("maininput").value[0] + "-minutes";
                }
                if (isNaN(byId("maininput").value[1]) == false && byId("maininput").value[1] != " ") {
                    finaltime = byId("maininput").value[0] + byId("maininput").value[1] + "-minutes";
                }
                if (isNaN(byId("maininput").value[2]) == false && byId("maininput").value[2] != " ") {
                    finaltime = byId("maininput").value[0] + byId("maininput").value[1] + byId("maininput").value[2] + "-minutes";
                }
                if (isNaN(byId("maininput").value[0]) == true || byId("maininput").value[0] == " ") {
                    console.warn("else");
                    found = [{
                        "a": "There was an error parsing your input please use the following format:<br><span title='NUMBER'>x</span> Minute(s)<span title='OR'> | </span><span title='NUMBER'>x</span> Second(s)",
                        "b": "ERROR"
                    }];
                }
                if (isNaN(byId("maininput").value[0]) == false) {
                    found = [{
                        "a": "<iframe src='https://vclock.com/set-timer-for-" + finaltime + "'>Loading...</iframe>",
                        "b": "TIMER"
                    }];
                }
            }
            else if (byId("maininput").value.toUpperCase().includes("SECOND") == true) {
                if (isNaN(byId("maininput").value[0]) == false && byId("maininput").value[0] != " ") {
                    finaltime = byId("maininput").value[0] + "-seconds";
                }
                if (isNaN(byId("maininput").value[1]) == false && byId("maininput").value[1] != " ") {
                    finaltime = byId("maininput").value[0] + byId("maininput").value[1] + "-seconds";
                }
                if (isNaN(byId("maininput").value[2]) == false && byId("maininput").value[2] != " ") {
                    finaltime = byId("maininput").value[0] + byId("maininput").value[1] + byId("maininput").value[2] + "-seconds";
                }
                if (isNaN(byId("maininput").value[0]) == true || byId("maininput").value[0] == " ") {
                    console.warn("else");
                    found = [{
                        "a": "There was an error parsing your input please use the following format:<br><span title='NUMBER'>x</span> Minute(s)<span title='OR'> | </span><span title='NUMBER'>x</span> Second(s)",
                        "b": "ERROR"
                    }];
                }
                if (isNaN(byId("maininput").value[0]) == false) {
                    found = [{
                        "a": "<iframe src='https://vclock.com/set-timer-for-" + finaltime + "'>Loading...</iframe>",
                        "b": "TIMER"
                    }];
                }
            }
            else {
                found = [{
                    "a": "There was an error parsing your input please use the following format:<br><span title='NUMBER'>x</span> Minute(s)<span title='OR'> | </span><span title='NUMBER'>x</span> Second(s)",
                    "b": "ERROR"
                }];
            }
        }
        if(special == "weather") {
            found = [{
                "a": "<iframe id='weather' src='https://www.bing.com/search?q="+ byId(`maininput`).value +"+weather'>Loading...</iframe><br><button class='yesandno w3-border w3-round' onClick='fullscreensomethin(`weather`)'><i class='fa fa-expand'></i></button> <button class='yesandno w3-border w3-round' onClick='openinbrowser(this.parentElement.firstChild.src)'><i class='fas fa-external-link-alt'></i></button>",
                "b": "WEATHER"
            }]
        }
        for (let i = 0; i < prefs.extensions.length; i++) { 
            if(special == prefs.extensions[i].name) {
                evalFunc = new Function(prefs.extensions[i].func);
                evalFunc();
            }
            }
    }
    else {
        specialBoolean = 0;
        found = getCountryByCode(final);
    }
    failBoolean = 0;
    if (found[0] == undefined) {
        failBoolean = 1;
        notfoundsearchfone = byId("maininput").value.split(" ");
        var notfoundsearch
        globalThis.notfoundsearch = "https://www.bing.com/search?q=" + notfoundsearchfone.join("%20");
        found = [{
            "a": "Hmm... I don't seem to understand. Would you like to <u><a target='blank' style='cursor:pointer' onclick='openinaniframe(notfoundsearch, notfoundsearchfone.join(` `))'>search on Bing</a></u>?",
            "b": "ERROR"
        }];
    }
    if (/[a-z]/i.test(byId("maininput").value) == false) {
        console.log("calc-USING DETECTION");
        found = [{
            "a": "<iframe id='calciframe' src='https://www.bing.com/search?q=" + byId("maininput").value + "'>Loading...</iframe><br><button class='yesandno w3-border w3-round' onClick='fullscreensomethin(`calciframe`)'><i class='fa fa-expand'></i></button> <button class='yesandno w3-border w3-round' onClick='openinbrowser(this.parentElement.firstChild.src)'><i class='fas fa-external-link-alt'></i></button>",
            "b": "CALC"
        }]
    }
    console.log(found);
    var tr = document.createElement("TR");
    document.getElementsByTagName("TBODY")[0].appendChild(tr);
    var td = document.createElement("TD");
    td.classList.add("responsecontainer");
    td.innerHTML = '<br><br><br><img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/NYCS-bull-trans-S.svg"><p class="response vivify popInBottom duration-300">' + found[0].a + '</p>';
    tr.appendChild(td);

    var td = document.createElement("TD");
    tr.appendChild(td);
    td.innerHTML = "<br><br><br>";
    var td = document.createElement("TD");
    td.classList.add("askcontainer");
    if (special != null) {
        td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">' + special + " " + byId("maininput").value + '</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
    }
    else {
        td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">' + byId("maininput").value + '</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
    }
    tr.appendChild(td);
    if (final == "CLEAR") {
        while (document.getElementsByTagName(`tbody`)[0].firstChild) { document.getElementsByTagName(`tbody`)[0].removeChild(document.getElementsByTagName(`tbody`)[0].firstChild); }
    }

    // UNCOMMENT ON RELEASE
/*     // Send info to server (see jarvis-server-side repo)
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost/jarvis-cloud/sendtoserver.php?pass=pass&command=" + byId("maininput").value + "&fail=" + failBoolean + "&special=" + specialBoolean, true);
    xmlhttp.send();
    // Back to your regularly scheduled programing */
    // This was: UNCOMMENT ON RELEASE

    // Clean up
    byId("maininput").value = null;
    cleanup();
    if (byId('form').firstChild.id == "special") {
        byId("special").remove();
    }
}
function openinaniframe(url, lookup) {
    var tr = document.createElement("TR");
    document.getElementsByTagName("TBODY")[0].appendChild(tr);
    var td = document.createElement("TD");
    td.classList.add("responsecontainer");
    td.innerHTML = '<br><br><br><img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/NYCS-bull-trans-S.svg"><p class="response vivify popInBottom duration-300"><iframe id="lookupclick" src="' + url + '">Loading...</iframe><br>Search by <a href="https://www.bing.com">Bing</a> <button class="yesandno w3-border w3-round" onClick="fullscreensomethin(`lookupclick`)"><i class="fa fa-expand"></i></button> <button class="yesandno w3-border w3-round" onClick="openinbrowser(`' + url + '`)"><i class="fas fa-external-link-alt"></i></button>';
    tr.appendChild(td);

    var td = document.createElement("TD");
    tr.appendChild(td);
    td.innerHTML = "<br><br><br>";
    var td = document.createElement("TD");
    td.classList.add("askcontainer");
    td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">' + "lookup " + lookup + '</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
    tr.appendChild(td);
}
function lookupinadictionary(query) {
    var tr = document.createElement("TR");
    document.getElementsByTagName("TBODY")[0].appendChild(tr);
    var td = document.createElement("TD");
    td.classList.add("responsecontainer");
    td.innerHTML = '<br><br><br><img class="profile" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/NYCS-bull-trans-S.svg"><p class="response vivify popInBottom duration-300"><iframe id="dicclick" src="https://www.vestal.ml/jarvis-cloud/dictionary/index.php?word=' + query + '">Loading...</iframe><br>Vestal Dictionary <button class="yesandno w3-border w3-round" onClick="fullscreensomethin(`dicclick`)"><i class="fa fa-expand"></i></button> <button class="yesandno w3-border w3-round" onClick="openinbrowser(`https://www.vestal.ml/jarvis-cloud/dictionary/index.php?word=' + query + '`)"><i class="fas fa-external-link-alt"></i></button>';
    tr.appendChild(td);

    var td = document.createElement("TD");
    tr.appendChild(td);
    td.innerHTML = "<br><br><br>";
    var td = document.createElement("TD");
    td.classList.add("askcontainer");
    td.innerHTML = '<br><br><br><p class="ask vivify popInBottom duration-300">' + "define " + query + '</p><img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkiQ3MylgdUv2uKdXl1htHFeHYcmoLVRCqeA&amp;usqp=CAU">';
    tr.appendChild(td);
}
function cleanup() {
    byId("maininput").placeholder = "Tell Jarvis...";
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
        if (byId("maininput").value.toUpperCase() == "DEFINE ") {
            defineaWord();
        }
        if (byId("maininput").value.toUpperCase() == "LOOKUP ") {
            lookupquery();
        }
        if (byId("maininput").value.toUpperCase() == "OPEN ") {
            openanapp();
        }
        if (byId("maininput").value.toUpperCase() == "SET A TIMER " || byId("maininput").value.toUpperCase() == "TIMER ") {
            setaTimer();
        }
        if (byId("maininput").value.toUpperCase() == "WEATHER ") {
            weatherspecial();
        }
        for (let i = 0; i < prefs.extensions.length; i++) { 
        if(byId("maininput").value.toUpperCase() == prefs.extensions[i].special + " ") {
            byId("maininput").placeholder = prefs.extensions[i].req;
            byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to remove" onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-rounded yesandno" id="special">'+ prefs.extensions[i].title +' | </button>');
            byId("maininput").value = null;
            special = prefs.extensions[i].name;
        }
        }
    }
    byId("maininput").addEventListener('keydown', function (e) {
        if (e.key == "Backspace" && byId("maininput").value == "" && special != null) {
            if (byId('form').firstChild.id == "special") {
                byId('form').firstChild.remove();
                cleanup();
            }
        }
    }, false);
}
function weatherspecial() {
    if (byId('form').firstChild.id != "special") {
    byId("maininput").placeholder = "location";
    byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to remove" onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-rounded yesandno" id="special">Weather for | </button>');
    byId("maininput").value = null;
    special = "weather";
    }
}
function openanapp() {
    if (byId('form').firstChild.id != "special") {
    byId("maininput").placeholder = "app | command";
    byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to remove" onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-rounded yesandno" id="special">Open | </button>');
    byId("maininput").value = null;
    special = "open";
    }
}
function setaTimer() {
    if (byId('form').firstChild.id != "special") {
    byId("maininput").placeholder = "x Minute(s) | x Second(s)";
    byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to remove" onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-rounded yesandno" id="special">Set a timer for | </button>');
    byId("maininput").value = null;
    special = "timer";
    }
}
function lookupquery() {
    if (byId('form').firstChild.id != "special") {
    byId("maininput").placeholder = "query";
    byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to remove" onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-rounded yesandno" id="special">Lookup | </button>');
    byId("maininput").value = null;
    special = "lookup";
    }
}
function defineaWord() {
    if (byId('form').firstChild.id != "special") {
    byId("maininput").placeholder = "word";
    byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to remove" onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-rounded yesandno" id="special">Define | </button>');
    byId("maininput").value = null;
    special = "define";
    }
}
function runinterminalspecial() {
    if (byId('form').firstChild.id != "special") {
        byId("maininput").placeholder = "word";
        byId('form').insertAdjacentHTML('afterbegin', '<button type="button" title="Click to remove" onclick="this.classList.add(`vivify`, `popOut`, `duration-350`);setTimeout(() => { this.remove() }, 350);cleanup()" class="w3-border w3-rounded yesandno" id="special">Define | </button>');
        byId("maininput").value = null;
        special = "define";
    }
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
    var powerOff = require('power-off');

    powerOff(function (err, stderr, stdout) {
        if (!err && !stderr) {
            console.log(stdout);
        }
    });
}
function dontmakefound() {
    found = [{
        "a": "There was an error parsing your input please use the following format:<br>",
        "b": "TIMER"
    }];
}
function makefound(finaltime) {
    found = [{
        "a": "<iframe id='timeriframe' src='https://www.online-stopwatch.com/timer/" + finaltime + "'>Loading...</iframe><br><button class='yesandno w3-border w3-round' onClick='fullscreensomethin(`timeriframe`)'><i class='fa fa-expand'></i></button> <button class='yesandno w3-border w3-round' onClick='openinbrowser(this.parentElement.firstChild.src)'><i class='fas fa-external-link-alt'></i></button>",
        "b": "TIMER"
    }];
}
setTimeout(function() {
    if(byId("cover")!=undefined) {
    byId("loading-details").innerHTML = "If you're still seeing this something probably went wrong... You can open Dev. Tools to look for errors and report any if found, or you can <a href='javascript:byId(`cover`).remove()'>remove</a> this cover"
}}, 20000);
