'use strict';
var rb = require('../'), ip = rb.ip;
var chai = require('chai'), assert = chai.assert;

// console.log(ip.v4.regex);
// console.log(ip.v6.regex);
// console.log(ip.ip.regex);

describe('ip', function() {

  it('v4', function() {
    assert.equal(ip.v4.is('192.168.1.1'), true);
    assert.equal(ip.v4.contain('192.168.1.a 192.168.1.1'), true);
    assert.deepEqual(ip.v4.match('192.168.1.a 192.68.1.1-8.8.8.8.'), [ '192.68.1.1', '8.8.8.8' ]);
  });

});
