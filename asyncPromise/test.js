const tape = require('tape')
const mixedTape = require('mixed-tape')
const test = mixedTape(tape);
const async = require('./async');

test('Make Sure Async function can be called', t => {
    t.plan(1)
    async.GetData_Success(1000).then((data) => {
            t.equal(data.length , 4)
    })
});


test('Make Sure Async function can be called', t => {
    t.plan(2)
    async.GetData_Failure(1000).then((data) => {
        t.equal(data.length , 4)
    }).catch((error) => {
        
        t.error(error , error.message);
        t.pass(error.message);
        t.ok();
    })
});


test('Test that async functions can be called too', async t => {
    t.plan(1)
     var data  = await async.GetData_Success(1000);
     t.equal(data.length , 4);
});