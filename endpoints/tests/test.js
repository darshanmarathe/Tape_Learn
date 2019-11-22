const tape = require('tape')
const mixedTape = require('mixed-tape')
const test = mixedTape(tape);

const app = require("../app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);


const axios  = require("axios");

var result = {};

const path = 'http://localhost:3000/'

test('Make Sure that we can call Express code', async t => {
   const data = await  request.get('/users');

   t.equal(data.body.length , 3);
    t.end();   
});

// test('Make sure that you can make AJAX call', async t => {
//     result = await axios.get(`${path}users`); 
//     t.equal(result.data.length , 3);
//     t.end();   
// });


// test('Make sure that you can make AJAX call', async t => {
//     t.equal(result.data.length , 3);
//     t.equal(result.length , 3)   
// });

