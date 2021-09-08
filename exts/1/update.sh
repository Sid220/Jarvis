#!/bin/bash

# Get version info

content=$(wget https://raw.githubusercontent.com/Sid220/jarvis-extensions/main/1/version.txt -q -O -)
echo "Latest Version: $content"
ver=$(jq '.extensions[] | select(.name == "run in terminal") | .version' prefs.json)
temp="${ver%\"}"
temp="${temp#\"}"
echo "Current Version: $temp"

# Update script

function update() {
    echo "Updating"
    curl -s https://raw.githubusercontent.com/Sid220/jarvis-extensions/main/1/upgrade.sh | bash -s
}

# Check if needed to be upgraded

case "$temp" in
"$content" ) echo "You are using the latest version!";;
*) update;;
esac
