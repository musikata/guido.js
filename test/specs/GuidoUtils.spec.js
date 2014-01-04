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
