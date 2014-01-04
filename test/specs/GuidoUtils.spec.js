define(
  [
    'guido/GuidoUtils'
],
function(GuidoUtils){



  describe('GuidoUtils', function(){

    it('should be defined', function(){
      expect(GuidoUtils).toBeDefined();
    });

    describe('modf', function(){
      it('should split numbers properly', function(){
        var testCases = [
          {num: 2.3, expected: {i: 2, f: .3}},
          {num: -2.3, expected: {i: -2, f: .3}},
          {num: 2, expected: {i: 2, f: 0}},
          {num: 0, expected: {i: 0, f: 0}},
        ]

        testCases.forEach(function(testCase){
          var actual = GuidoUtils.modf(testCase.num);
          actual.f = parseFloat(actual.f.toPrecision(6));
          expect(actual).toEqual(testCase.expected);
        });
      });
    });

    it('should getGreatestCommonDivisor', function(){
      expect(GuidoUtils.getGreatestCommonDivisor(8, 12)).toBe(4);
      expect(GuidoUtils.getGreatestCommonDivisor(3, 7)).toBe(1);
    });

    it('should getSmallstCommonMultiple', function(){
      expect(GuidoUtils.getSmallestCommonMultiple(4, 6)).toBe(12);
      expect(GuidoUtils.getSmallestCommonMultiple(3, 7)).toBe(21);
    });

    describe('assert', function(){
      it('should throw error if assertion is false', function(){
        expect(function(){
          GuidoUtils.assert(false);
        }).toThrow();
      });

      it('should do nothing if assertion is true', function(){
        expect(function(){
          GuidoUtils.assert(true);
        }).not.toThrow();
      });
    });

  });

});
