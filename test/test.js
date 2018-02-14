// var assert = require('assert');
//
// var chai = require('chai');
//
var chai = require('chai');

var assert = chai.assert

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('뭔가 복잡해보이긴 한다.', function() {
    describe('이곳에는 콜하는 함수이름을?', function() {
        it('Should return ', function() {
            var a = 10;
            var b = 20;
            assert.equal(a, b);
        });
    });
});

describe('test', function() {
    describe('ass', function() {
        it('should equal', function() {
            //
        });
    });
});

describe('description', function() {
    it('description', function() {
        assert.equal("a", "a")
        assert.fail()
    });
});

