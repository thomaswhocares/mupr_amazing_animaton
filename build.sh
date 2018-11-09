#!/bin/sh
cd ./*wasm
cargo build --release --target wasm32-unknown-unknown
cd ..
wasm-bindgen ./wasm/target/wasm32-unknown-unknown/release/wasm.wasm --out-dir ./wasm-bindgen-output
echo __Bindgen: Succes__
cp ./wasm-bindgen-output/*.wasm ./node/src/
cp ./wasm-bindgen-output/*.js ./node/src/
echo __Moved WASM and JS to node/src__
cd ./node
#npm install
npx webpack
rm -R ../../http/dist
mv ./dist ../../http
