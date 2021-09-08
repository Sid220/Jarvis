wget -r --no-parent --reject "index.html*" -P ./exts/ $1
mv ./exts/status.vestal.ml/jarvis-extensions/$2/ ./exts/
rm -R ./exts/status.vestal.ml/
chmod +x ./exts/$2 -R
bash ./exts/$2/install.sh