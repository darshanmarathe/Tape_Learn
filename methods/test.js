const tape = require('tape')
const mixedTape = require('mixed-tape')
const test = mixedTape(tape);

const data = require("./data.json");
const tests = require("./tests.json");

test('Dynamic test Example', (t) => {
    t.plan(tests.length);
   for (const _test of tests) {

    t[_test.type](eval("data" + _test.property) , _test.value  , _test.message || "");
   }

});
