#!/bin/sh

# For more comments about what's going on here, see the `hello_world` example

set -ex
cd "$(dirname $0)"

cargo build --release  --target wasm32-unknown-unknown

wasm-bindgen ./target/wasm32-unknown-unknown/release/wasm_bindgen_paint.wasm --out-dir .

npm install
npm run serve
