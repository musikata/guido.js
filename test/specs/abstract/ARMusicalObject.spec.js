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
        var arMusObj = new ARMusicalObject();
        expect(arMusObj instanceof ARMusicalObject).toBe(true);
      });

      it('should handle ARMusicalObject(Fraction)', function(){
        var relativeTimePos = new Fraction(3/4);
        var arMusObj = new ARMusicalObject(relativeTimePos);
        expect(arMusObj instanceof ARMusicalObject).toBe(true);
        expect(arMusObj.relativeTimePosition.eq(relativeTimePos)).toBe(true);
      });

      it('should handle ARMusicalObject(ARMusicalObject)', function(){
        var relativeTimePos = new Fraction(3/4);
        var srcArMusObj = new ARMusicalObject(relativeTimePos);
        var cpyArMusObj = new ARMusicalObject(srcArMusObj);
        expect(cpyArMusObj instanceof ARMusicalObject).toBe(true);
        expect(cpyArMusObj.relativeTimePosition.eq(
          srcArMusObj.relativeTimePosition)).toBe(true);
      });
    });

    it('should setDuration', function(){
      var arMusObj = new ARMusicalObject();
      var duration = new Fraction(3/4);
      arMusObj.setDuration(duration);
      expect(arMusObj.duration.eq(duration)).toBe(true);
    });

    it('should getDuration', function(){
      var arMusObj = new ARMusicalObject();
      var duration = new Fraction(3/4);
      arMusObj.setDuration(duration);
      expect(arMusObj.getDuration().eq(duration)).toBe(true);
    });

    it('should setRelativeTimePosition', function(){
      var arMusObj = new ARMusicalObject();
      var timePos = new Fraction(3/4);
      arMusObj.setRelativeTimePosition(timePos);
      expect(arMusObj.relativeTimePosition.eq(timePos)).toBe(true);
    }),

    it('should getRelativeTimePosition', function(){
      var arMusObj = new ARMusicalObject();
      var timePos = new Fraction(3/4);
      arMusObj.setRelativeTimePosition(timePos);
      expect(arMusObj.getRelativeTimePosition().eq(timePos)).toBe(true);
    });

    it('should setRelativeEndTimePosition', function(){
      var arMusObj = new ARMusicalObject();
      arMusObj.setDuration(new Fraction(1/4));
      arMusObj.setRelativeTimePosition(new Fraction(2/4));
      arMusObj.setRelativeEndTimePosition(new Fraction(1/1));

      expect(
        arMusObj.getRelativeEndTimePosition().eq(new Fraction(1/1))
      ).toBe(true);

      expect(
        arMusObj.getDuration().eq(new Fraction(2/4))
      ).toBe(true)
    });

    it('should getRelativeEndTimePosition', function(){
      var arMusObj = new ARMusicalObject();
      arMusObj.setDuration(new Fraction(1/4));
      arMusObj.setRelativeTimePosition(new Fraction(2/4));
      expect(
        arMusObj.getRelativeEndTimePosition().eq(new Fraction(3/4))
      ).toBe(true);
    });

    it('should setStartTimePosition', function(){
      // This method is a NOP.
      expect(true).toBe(true)
    });

    it('should setVoiceNum', function(){
      var arMusObj = new ARMusicalObject();
      arMusObj.setVoiceNum(7);
      expect(arMusObj.voiceNum).toBe(7);
    });

    it('should getVoiceNum', function(){
      var arMusObj = new ARMusicalObject();
      arMusObj.setVoiceNum(7);
      expect(arMusObj.getVoiceNum()).toBe(7);
    });

    it('should setDrawGR', function(){
      var arMusObj = new ARMusicalObject();
      arMusObj.setDrawGR(true);
      expect(arMusObj.drawGR).toBe(true);
    });

    it('should getDrawGR', function(){
      var arMusObj = new ARMusicalObject();
      arMusObj.setDrawGR(true);
      expect(arMusObj.getDrawGR()).toBe(true);
    });

    it('should Copy', function(){
      var relativeTimePos = new Fraction(3/4);
      var srcArMusObj = new ARMusicalObject(relativeTimePos);
      var cpyArMusObj = srcArMusObj.Copy();
      expect(cpyArMusObj instanceof ARMusicalObject).toBe(true);
      expect(cpyArMusObj.relativeTimePosition.eq(
        srcArMusObj.relativeTimePosition)).toBe(true);
    });

    it('should stringify', function(){
      var arMusObj = new ARMusicalObject();
      arMusObj.setDrawGR(true);
      expect(arMusObj.toString()).toBe(
        'ARMusicalObject: duration: 0/1; time pos: 0/1;');
    });

    // NOT IMPLEMENTED YET.
    xdescribe('GRRepresentation methods', function(){
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
    });

    it('should do isEventClass', function(){
      var arMusObj = new ARMusicalObject();
      expect(arMusObj.isEventClass()).toBe(false);
    });

    it('should browse', function(){
      var arMusObj = new ARMusicalObject();
      // This method is a NOP.
      expect(function(){
        arMusObj.browse();
      }).not.toThrow();
    });

  });
});
