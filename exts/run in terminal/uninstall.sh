#!/bin/bash
jq 'del(.extensions[] | select(.name == "run in terminal"))' ../../prefs.json > tmp.$$.json && mv tmp.$$.json ../../prefs.json