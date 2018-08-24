#!/bin/sh

# トランスパイル
tsc
# テスト実行
mocha ./build/test/*.test.js
# javascriptのカバレッジ計測
istanbul cover _mocha -- ./build/test/*.test.js
# typescriptのカバレッジ計測
remap-istanbul -i ./coverage/coverage.json -o ./coverage/ts-report -t html