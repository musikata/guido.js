define(
  [
    'guido/parser/GuidoParser',
],
function(GuidoParser){



  describe('GuidoParser', function(){

    it('should be defined', function(){
      expect(GuidoParser).toBeDefined();
    });

    it('should parse basic GMN correctly', function(){
      var testData = {
        gmn: '[c4]',
        expected: [
          ['score:begin'],
          ['segment:begin'],
          ['sequence:begin'],
          ['note:begin', 'c'],
          ['octave', 4],
          ['sequence:appendNote'],
          ['sequence:end'],
          ['segment:end'],
          ['score:end']
        ]
      };

      var actual = GuidoParser.parse(testData.gmn);
      expect(actual).toEqual(testData.expected);
    });
  });

});
