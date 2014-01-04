/*
 * Utility functions for Guido.js
 */

define(
  [
],
function(){
  var GuidoUtils = {
    // Simple assertion checking.
    assert: function(bool){
      if (! bool){
        throw new Error("Assertion error");
      }
    },

    // Split a number into integer and decimal parts.
    modf: function(num){
      var fracPart = num % 1;
      var intPart = num - fracPart;
      return {i: intPart, f: Math.abs(fracPart)};
    },

    // greatest common denominator.
    getGreatestCommonDivisor: function(i1, i2){
      var tmp;
      while (i2) {
        tmp = i2;
        i2 = i1 % i2;
        i1 = tmp;
      }
      return i1;
    },

    // smallest common multiple.
    getSmallestCommonMultiple: function(i1, i2){
      if (i1 == i2){
        return i1;
      }
      var gcd= GuidoUtils.getGreatestCommonDivisor(i1, i2);
      return (i1/gcd) * i2;
    }
  };

  return GuidoUtils;
});
