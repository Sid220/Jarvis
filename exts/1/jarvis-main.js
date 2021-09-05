function runInTerminal() {
    cmd = byId("maininput").value;
    const { runInTerminal } = require('run-in-terminal');
    found = [{
        "a": "Running...",
        "b": "RUN IN TERMINAL"
    }]
    runInTerminal(cmd, null, {
        cwd: process.cwd()
    });
}