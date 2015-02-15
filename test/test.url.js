'use strict';
var url = require('../').url;
var chai = require('chai'), assert = chai.assert;


describe('url', function() {

  it('*', function() {
    assert.equal(url.is('http://markzhan.com'), true);
  });

});
