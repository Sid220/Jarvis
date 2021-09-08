#!/bin/bash
sudo apt install gnome-terminal
sudo npm i run-in-terminal
jq '.extensions[.extensions | length] |= . + {
            "name": "run in terminal",
            "ID": 1,
            "version": "0.0.1",
            "details": "Extension that allows you to run commands in your terminal",
            "func": "runInTerminal()",
            "special": "RUN",
            "req": "command | app",
            "title": "Run in terminal"
        }' prefs.json > tmp.$$.json && mv tmp.$$.json prefs.json
