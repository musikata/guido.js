define(
  [
    'guido/abstract/Fraction'
],
function(Fraction){
  describe('Fraction', function(){
    it('should be defined', function(){
      expect(Fraction).toBeDefined();
    });

    describe('constructors', function(){

      it('should create default fraction with no args', function(){
        var f = new Fraction();
        expect(f.getNumerator()).toBe(0);
        expect(f.getDenominator()).toBe(1);
        expect(f.valueOf()).toBe(0);
      });

      it('should create fraction from int', function(){
        var f = new Fraction(2);
        expect(f.getNumerator()).toBe(2);
        expect(f.getDenominator()).toBe(1);
        expect(f.valueOf()).toBe(2);
      });

      it('should create fraction from float', function(){
        var f = new Fraction(8/3);
        expect(f.getNumerator()).toBe(8);
        expect(f.getDenominator()).toBe(3);
        expect(f.valueOf()).toBe(8/3);
      });

      it('should create fraction from numerator and denominator', function(){
        var f = new Fraction(8, 3);
        expect(f.getNumerator()).toBe(8);
        expect(f.getDenominator()).toBe(3);
        expect(f.valueOf()).toBe(8/3);
      });

    });

    it('should normalize to reduced form', function(){
      var f = new Fraction(16, 6);
      expect(f.getNumerator()).toBe(8);
      expect(f.getDenominator()).toBe(3);
    });

    it('should display correctly as a string', function(){
      var f = new Fraction(8, 3);
      expect(f.toString()).toBe('8/3');
    });

    it('should invert', function(){
      var f = new Fraction(8, 3);
      f.invert();
      expect(f.getNumerator()).toBe(3);
      expect(f.getDenominator()).toBe(8);
      expect(f.valueOf()).toBe(3/8);
    });

    it('should determine if denominator is a multiple', function(){
      var f = new Fraction(1, 16);
      expect(f.isMultiple(2)).toBe(4);
      expect(f.isMultiple(4)).toBe(2);
      expect(f.isMultiple(3)).toBe(-1);
    });

    // I (Alex) am not grokking these two functions yet,
    // So come back later when we understand them to
    // make proper tests.
    xit('should get biggest full note', function(){
      var f = new Fraction(1/4);
      var fullNote = f.getBiggestFullNote(3);
      expect(true).toBe(false);
    });

    xit('should get smallest note', function(){
      var f = new Fraction(1/4);
      var fullNote = f.getReallySmallerNote(3);
      expect(true).toBe(false);
    });

    describe('comparisons', function(){

      it('should handle >', function(){
        var f1 = new Fraction(1/4);
        var f2 = new Fraction(2/4);
        expect(f1.gt(f2)).toBe(false);
        expect(f2.gt(f1)).toBe(true);
      });

      it('should handle >=', function(){
        var f1 = new Fraction(1/4);
        var f2 = new Fraction(2/4);
        var f3 = new Fraction(1/4);
        expect(f1.ge(f2)).toBe(false);
        expect(f2.ge(f1)).toBe(true);
        expect(f1.ge(f3)).toBe(true);
      });

      it('should handle <', function(){
        var f1 = new Fraction(1/4);
        var f2 = new Fraction(2/4);
        expect(f1.lt(f2)).toBe(true);
        expect(f2.lt(f1)).toBe(false);
      });

      it('should handle <=', function(){
        var f1 = new Fraction(1/4);
        var f2 = new Fraction(2/4);
        var f3 = new Fraction(1/4);
        expect(f1.le(f2)).toBe(true);
        expect(f2.le(f1)).toBe(false);
        expect(f1.le(f3)).toBe(true);
      });

      it('should handle ==', function(){
        var f1 = new Fraction(1/4);
        var f2 = new Fraction(2/4);
        var f3 = new Fraction(1/4);
        expect(f1.eq(f2)).toBe(false);
        expect(f1.eq(f3)).toBe(true);
      });

      it('should handle !=', function(){
        var f1 = new Fraction(1/4);
        var f2 = new Fraction(2/4);
        var f3 = new Fraction(1/4);
        expect(f1.ne(f2)).toBe(true);
        expect(f1.ne(f3)).toBe(false);
      });
    });

    describe('static operators', function(){

      it('should add', function(){
        var f1 = new Fraction(1/4);
        var f2 = new Fraction(2/4);
        var f3 = Fraction.add(f1, f2);
        expect(f3.valueOf()).toBe(3/4);
      });

      it('should subtract', function(){
        var f1 = new Fraction(1/4);
        var f2 = new Fraction(2/4);
        var f3 = Fraction.minus(f1, f2);
        expect(f3.valueOf()).toBe(-1/4);
      });

      it('should multiply', function(){
        var f1 = new Fraction(1/4);
        var f2 = new Fraction(2/4);
        var f3 = Fraction.multiply(f1, f2);
        expect(f3.valueOf()).toBe(1/8);
      });

      it('should mod', function(){
        var f1 = new Fraction(3/4);
        var f2 = new Fraction(1/2);
        var f3 = Fraction.mod(f1, f2);
        expect(f3.valueOf()).toBe(1/4);
      });
    });

  });
});
