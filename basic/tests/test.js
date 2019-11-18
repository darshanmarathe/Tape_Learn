const logic = require('../logic');
const tape = require('tape')
const mixedTape = require('mixed-tape')
const test = mixedTape(tape);

test('first test', t => {
    setTimeout(() => {
      t.equals(1, 1, 'why not?')
      t.end()
    }, 2000)
  })
  
  test('second test', t => {
    setTimeout(() => {
      t.ok(true, 'I will never fail')
      t.end()
    }, 1000)
  })
  

test('test that it returns a array', t => {
    var item = StringToArray("1|2|3|4");
   
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

test('Test Error Happens', t => {
  
  t.throws(()=> {
   let arr = StringToArray("1|3/2|3|1 1/2|2/0");
   console.log(arr.toSSS())
  }, 'Dose not throw error');

  t.throws(() => {
    let arr = removeDups([1,2,4,5,5]);
    
  }, 'Not thorws');
  t.end();

  
});