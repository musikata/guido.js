define(
  [
    'guido/abstract/ARMusic',
    'guido/abstract/Fraction'
],
function(
  ARMusic,
  Fraction
){
  describe('ARMusic', function(){
    it('should be defined', function(){
      expect(ARMusic).toBeDefined();
    });

    it('should construct via ARMusic()', function(){
      var arMusic = new ARMusic();
      expect(arMusic instanceof ARMusic).toBe(true);
    });

    it('should adjustDuration', function(){
      var arMusic = new ARMusic();
      arMusic.adjustDuration(new Fraction(3/4));
      expect(arMusic.duration.valueOf()).toEqual(.75);
    });

    it('should countVoices', function(){
      var arMusic = new ARMusic();
      var cnt = arMusic.countVoices();
      expect(cnt).toEqual(0);
    });

    it('should getTimeMap', function(){
      // Not implemented yet.
      this.fail('not implemented');
    });

    it('should toString', function(){
      this.fail('not implemented');
    });

    it('should resetGRRepresentation', function(){
      this.fail('not implemented');
    });

    it('should doAutoBreaks', function(){
      this.fail('not implemented');
    });

    it('should doAutoStuff', function(){
      this.fail('not implemented');
    });

    it('should MarkVoice', function(){
      this.fail('not implemented');
    });

    it('should removeAutoTags', function(){
      this.fail('not implemented');
    });

    it('should getName', function(){
      var arMusic = new ARMusic();
      arMusic.name = 'Fats Waller';
      expect(arMusic.getName()).toEqual('Fats Waller');
    });

    it('should setName', function(){
      var arMusic = new ARMusic();
      arMusic.setName('Fats Waller');
      expect(arMusic.name).toEqual('Fats Waller');
    });

    it ('should setPath', function(){
      this.fail('not implemented');
    });

    it ('should getPath', function(){
      this.fail('not implemented');
    });

  });
});
