define(
  [
    'guido/abstract/Fraction',
    'guido/abstract/ARMusicalEvent'
],
function(
  Fraction,
  ARMusicalEvent
){

  describe('ARMusicalEvent', function(){
    it('should be defined', function(){
      expect(ARMusicalEvent).toBeDefined();
    });

    it('should handle ARMusicalEvent()', function(){
      var e = new ARMusicalEvent();
      expect(e instanceof ARMusicalEvent).toBe(true);
      expect(e.points).toBe(0);
    });

    it('should handle ARMusicalEvent(duration)', function(){
      var duration = new Fraction(1/4);
      var e = new ARMusicalEvent(duration);
      expect(e instanceof ARMusicalEvent).toBe(true);
      expect(e.duration).toEqual(duration);
      expect(e.points).toBe(0);
    });

    it('should handle ARMusicalEvent(anotherEvent)', function(){
      var duration = new Fraction(1/4);
      var e = new ARMusicalEvent(duration);
      e.points = 1;
      var eCpy = new ARMusicalEvent(e);
      expect(eCpy instanceof ARMusicalEvent).toBe(true);
      expect(eCpy.duration).toEqual(e.duration);
      expect(eCpy.points).toEqual(e.points);
    });

    it('should handle ARMusicalEvent(numerator, denominator)', function(){
      var e = new ARMusicalEvent(1, 4);
      expect(e instanceof ARMusicalEvent).toBe(true);
      expect(e.duration.valueOf()).toEqual(.25);
    });

    it('should handle ARMusicalEvent(relativeTimePos, duration)', function(){
      var relativePos = new Fraction(1/4);
      var duration = new Fraction(2/4);
      var e = new ARMusicalEvent(relativePos, duration);
      expect(e instanceof ARMusicalEvent).toBe(true);
      expect(e.duration.valueOf()).toEqual(.5);
      expect(e.relativeTimePosition.valueOf()).toEqual(.25);
    });

    it('should handle Copy', function(){
      var duration = new Fraction(1/4);
      var e = new ARMusicalEvent(duration);
      e.points = 1;
      var eCpy = e.Copy();
      expect(eCpy instanceof ARMusicalEvent).toBe(true);
      expect(eCpy.duration).toEqual(e.duration);
      expect(eCpy.points).toEqual(e.points);
    });

    it('should setDenominator', function(){
      var e = new ARMusicalEvent();
      e.setDenominator(2);
      expect(e.duration.denominator).toBe(2);
    });

    it('should setNumerator', function(){
      var e = new ARMusicalEvent();
      e.setNumerator(3);
      expect(e.duration.numerator).toBe(3);
    });

    it('should setPoints', function(){
      var e = new ARMusicalEvent(new Fraction(1/2));
      e.setPoints(1);
      expect(e.points).toBe(1);
      expect(e.duration.valueOf()).toBe(.75);

      var e2 = new ARMusicalEvent(new Fraction(1/2));
      e2.setPoints(2);
      expect(e2.points).toBe(2);
      expect(e2.duration.valueOf()).toBe(.875);
    });

    it('should getPoints', function(){
      var e = new ARMusicalEvent(new Fraction(1/2));
      e.setPoints(1);
      expect(e.getPoints()).toBe(1);
    });

    it('should setPointsNoDurationChange', function(){
      var e = new ARMusicalEvent(new Fraction(1/2));
      e.setPointsNoDurationChange(3);
      expect(e.getPoints()).toBe(3);
      expect(e.duration.valueOf()).toBe(.5);
    });

    it('should CanBeMerged', function(){
      var e = new ARMusicalEvent();
      var e2 = new ARMusicalEvent();
      var noMerge = {};
      expect(e.CanBeMerged(e2)).toBe(true);
      expect(e.CanBeMerged(noMerge)).toBe(false);
    });

  });

});
