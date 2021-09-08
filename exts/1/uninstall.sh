#!/bin/bash
jq 'del(.extensions[] | select(.name == "run in terminal"))' prefs.json > tmp.$$.json && mv tmp.$$.json prefs.json
rm -R ./exts/1
echo "Uninstalled :("
