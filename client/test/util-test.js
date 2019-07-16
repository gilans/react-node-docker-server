let assert = require('assert')
let calculator = require('../utils')
describe('calculator', () => {
  describe('add function', () => {
    it('adds numbers', () => {
      let result = calculator.add(1, 1);
      assert.equal(result, 2);
    })
  })
})