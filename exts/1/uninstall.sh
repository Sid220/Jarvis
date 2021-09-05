#!/bin/bash
echo "Uninstalling..."
rm ./exts/1 -R
jq 'del(.extensions[] | select(.name == "run in terminal"))' prefs.json > tmp.$$.json && mv tmp.$$.json prefs.json
if [ $? -eq 0 ]; then
    echo "Uninstalled"
    exit 0
else
    echo "There was an error uninstalling"
fi