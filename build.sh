#!/bin/sh

RUST_LIB_PATH="./rust_lib"
RUST_LIB_NAME="rust_lib"
BINDGEN_OUTPUT_FOLDER_PATH="./wasm_bindgen_output"
NODE_FOLDER_PATH="./node"
WWW_ROOT_PATH="./www_root"
WWW_ROOT_SCRIPT_PATH="$WWW_ROOT_PATH/script"

if [ ! -d "$BINDGEN_OUTPUT_FOLDER_PATH" ];
  then
    echo "Creating bindgen output folder"
    mkdir $BINDGEN_OUTPUT_FOLDER_PATH
fi

cd $RUST_LIB_PATH
cargo build --release --target wasm32-unknown-unknown
cd ..

wasm-bindgen $RUST_LIB_PATH/target/wasm32-unknown-unknown/release/$RUST_LIB_NAME.wasm --out-dir $BINDGEN_OUTPUT_FOLDER_PATH
echo __Bindgen: Succes__

cp $BINDGEN_OUTPUT_FOLDER_PATH/*.wasm $NODE_FOLDER_PATH/src/
cp $BINDGEN_OUTPUT_FOLDER_PATH/*.js $NODE_FOLDER_PATH/src/
echo __Moved WASM and JS to node/src__

cd $NODE_FOLDER_PATH
#npm install
npm run serve
cd ..
