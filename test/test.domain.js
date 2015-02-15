'use strict';
var punycode = require('punycode');
var rb = require('../'), domain = rb.domain;
var chai = require('chai'), assert = chai.assert;

//punycode.toASCII(str)

describe('domain', function() {

  it('*', function() {
    assert.equal(domain.is('markzhan.com'), true);
  });

});
