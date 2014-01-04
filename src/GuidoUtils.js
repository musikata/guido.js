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
  };

  return GuidoUtils;
});
