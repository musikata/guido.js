define(
  [
    'guido/abstract/ARMusicalObject',
    'guido/abstract/Fraction'
],
function(
  ARMusicalObject,
  Fraction
){

  describe("ARMusicalObject", function(){

    it("should be defined", function(){
      expect(ARMusicalObject).toBeDefined()
    });

    describe('constructors', function(){
      it('should handle ARMusicalObject()', function(){
        expect(true).toBe(false);
      });

      it('should handle ARMusicalObject(Fraction)', function(){
        expect(true).toBe(false);
      });

      it('should handle ARMusicalObject(ARMusicalObject)', function(){
        expect(true).toBe(false);
      });
    });

    it('should getDuration', function(){
      expect(true).toBe(false);
    });

    it('should setDuration', function(){
      expect(true).toBe(false);
    });

    it('should getRelativeTimePosition', function(){
      expect(true).toBe(false);
    });

    it('should getRelativeEndTimePosition', function(){
      expect(true).toBe(false);
    });

    it('should setRelativeEndTimePosition', function(){
      expect(true).toBe(false);
    });

    it('should setStartTimePosition', function(){
      expect(true).toBe(false);
    });

    it('should setVoiceNum', function(){
      expect(true).toBe(false);
    });

    it('should getVoiceNum', function(){
      expect(true).toBe(false);
    });

    it('should setDrawGR', function(){
      expect(true).toBe(false);
    });

    it('should getDrawGR', function(){
      expect(true).toBe(false)
    });

    it('should Copy', function(){
      expect(true).toBe(false);
    });

    it('should stringify', function(){
      expect(true).toBe(false);
    });

    it('should addGRRepresentation', function(){
      expect(true).toBe(false);
    });

    it('should getGRRepresentation', function(){
      expect(true).toBe(false);
    });

    it('should removeGRRepresentation', function(){
      expect(true).toBe(false);
    });

    it('should getFirstGRRepresentation', function(){
      expect(true).toBe(false);
    });

    it('should getLastGRRepresentation', function(){
      expect(true).toBe(false);
    });

    it('should do isEventClass', function(){
      expect(true).toBe(false);
    });

    it('should browse', function(){
      expect(true).toBe(false);
    });

  });
});
