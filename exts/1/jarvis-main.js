function runInTerminal() {
    var attr = new Array;
    cmd = byId("maininput").value.toLowerCase().split(" ")[0];
    for(i = 1; i < byId("maininput").value.toLowerCase().split(" ").length;i++) {
        attr.push(byId("maininput").value.toLowerCase().split(" ")[i]);
    }
    const { runInTerminal } = require('run-in-terminal');
    found = [{
        "a": "Running...",
        "b": "RUN IN TERMINAL"
    }]
    if(byId("maininput").value.toLowerCase().split(" ").length > 1) {
    runInTerminal(cmd, attr, {
        cwd: process.cwd()
    });
}
else {
    runInTerminal(cmd, null, {
        cwd: process.cwd()
    });
}
}
