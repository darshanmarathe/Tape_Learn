const tape = require('tape')
const mixedTape = require('mixed-tape')
const test = mixedTape(tape);




const axios  = require("axios");

var result = {};

const path = 'http://localhost:3000/'

test('setup', async(t) => {
    console.log('setup')
    result = await axios.get(`${path}users`);
    t.end();
});

test('Make sure that you can make AJAX call', async t => {
    console.log('result')
    t.equal(result.length , 3)   
});


test('Make sure that you can make AJAX call', async t => {
    t.equal(result.length , 3)   
});



test('teardown', async(t) => {
  result = {};
  console.log('tareing down');
  
    t.end();
});
