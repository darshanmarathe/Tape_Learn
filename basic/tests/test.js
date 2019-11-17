const logic = require('../logic');
const test = require('tape');

test('test that it returns a array', t => {
    var item = StringToArray("1|2|3|4")
    t.deepEqual(item ,  [1,2,3,4])
    t.end();
});


test('test that it returns a array when something other num is passed', t => {
    var item = StringToArray("1|as|3|4")
    console.log*=(item)
    t.deepEqual(item ,  [1,3,4])
    t.end();
    
});


test('test that it returns floats', t => {
    var item = StringToArray("1|1.4|3|4")
    console.log*=(item)
    t.deepEqual(item ,  [1,1.4,3,4])
    t.end();
    
});


test('test that it can evaluate fractors', t => {
    var item = StringToArray("1|3/2|3|4")
    console.log*=(item)
    t.deepEqual(item ,  [1,1.5,3,4])
    t.end();
    
});




test('test that it can evaluate bigger fractors ', t => {
    var item = StringToArray("1|3/2|3|1 1/2")
    console.log*=(item)
    t.deepEqual(item ,  [1,1.5,3])
    t.end();
    
});



test('test that it can remove the duplicate values ', t => {
    var item = StringToArray("1|3/2|3|1 1/2")
    console.log*=(item)
    t.deepEqual(item ,  [1,1.5,3])
    t.end();
    
});
