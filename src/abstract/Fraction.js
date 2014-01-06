/*
 * Port of GuidoEngine Fraction class.
 * Developer caveats: watch out for operator overloading.
 * We will need to be careful to check operator use as we port other parts of
 * the Guido library.
 */

define(
  [
    'underscore',
    'guido/misc/Class',
    'guido/GuidoUtils'
],
function(
  _,
  Class,
  GuidoUtils
){

  // First 10 Primes, used for converting floats to
  // fractions.
  var _PRIMES = [2, 3, 5, 7, 9, 11, 13, 17, 19, 21];

  // Constructors.
  var Fraction = Class.extend({

    init: function(){

      this.numerator;
      this.denominator;
      this.dval;

      // Fraction()
      if (arguments.length == 0){
        this.numerator = 0;
        this.denominator = 1;
        this.dval = 0;
      }

      // Fraction(numerator, denominator)
      else if (arguments.length == 2){
        this.set.apply(this, arguments);
      }

      else if (arguments.length == 1){
        var val = arguments[0];
        var isInt = (val % 1) === 0;

        // Fraction(intValue)
        if (isInt){
          this.numerator = val;
          this.denominator = 1;
          this.dval = val;
        }

        // Fraction(floatValue)
        // Attemps to convert from a float value to a real-valued fraction.
        // We do this by multiplying the number by powers of primes.
        // If the denominator is in fact composed of powers of primes
        // within in our range, then the multiplied numerator will be a pure
        // integer when we have found a superset of the denominator's composition.
        else {
          this.numerator = val;
          this.denominator = 1;
          this.dval = 0;

          var i = 0;
          var multiplier = 1;
          var primeExp = 7; // Raise primes to this exponent for better coverage.
          var threshold = 1.0e-8;

          var modfResult = GuidoUtils.modf(val);
          while ( (modfResult.f > threshold) && i < _PRIMES.length) {
            multiplier *= Math.pow(_PRIMES[i], primeExp);
            this.numerator *= multiplier;
            this.denominator *= multiplier;
            modfResult = GuidoUtils.modf(this.numerator);
            i++;
          }
          GuidoUtils.assert(modfResult.f < threshold);
          this.numerator = modfResult.i;

          this.normalize();
        } // end Fraction(floatValue)

      }

    },

    getNumerator : function(){
      return this.numerator;
    },

    getDenominator: function(){
      return this.denominator;
    },

    normalize: function(){

      // divide numerator and denominator by their greatest common divisor
      // denominator is assumed to be nonzero and positive

      if (this.numerator == this.denominator){
        this.set(1,1, {normalize: false});
        return;
      }

      if (-this.numerator == this.denominator){
        this.set(-1, 1, {normalize: false});
        return;
      }

      var gcd = GuidoUtils.getGreatestCommonDivisor(
        this.numerator, this.denominator);
      this.numerator /= gcd;
      this.denominator /= gcd;

      if (this.denominator < 0) {
        this.numerator *= -1;
        this.denominator *= -1;
      }

      this.dval = this.numerator / this.denominator;

    },

    set: function(numerator, denominator, opts){
      opts = opts || {};
      if (_.isUndefined(opts.normalize)){
        opts.normalize = true;
      }
      this.numerator = numerator;
      this.denominator = denominator;

      GuidoUtils.assert(this.denominator != 0);

      if (opts.normalize){
        this.normalize();
      }

      this.dval = this.numerator/this.denominator;
    },

    toString: function(){
      return this.numerator + '/' + this.denominator;
    },

    setDenominator: function(newDenominator){
      this.set(this.numerator, newDenominator);
    },

    setNumerator: function(newNumerator){
      this.set(newNumerator, this.denominator);
    },

    invert: function(){
      if (this.dval != 0){
        this.set(this.denominator, this.numerator);
      }
    },

    // Tests if the fraction is of the form m/(n^k).
    // Returns exponent (>=0) or -1.
    isMultiple: function(n){
      var tmp = n;
      var exp = 1;

      if (this.denominator == 1){
        return 0;
      }

      while (tmp < this.denominator){
        tmp *= n;
        exp++;
      }

      if (this.denominator == tmp){
        return exp;
      }

      return -1;
    },

    isOdd: function(){
      return (this.dval % 2 == 1);
    },

    isEven: function(){
      return (this.dval % 2 == 0);
    },

    // These functions get used for determining
    // display durations for notes that have irregular
    // raw durations.
    // I (Alex) am not grokking these yet, so come back to testing this laster.
    getBiggestFullNote: function(base){
      if (base == 1){
        return new Fraction(1);
      }

      var exp = Math.ceil(-1 * Math.log(this.dval) / Math.log(base) );
      if (exp < 0){
        exp = 0;
      }

      var denominator = Math.pow(base, exp);

      return new Fraction(1, denom);
    },

    getReallySmallerNote: function(base){
      if (base == 1){
        return new Fraction(1);
      }
      var exp = Math.ceil(-1 * Math.log(this.dval) / Math.log(base) ) + 1;

      if (exp < 0){
        exp = 0;
      }

      var denominator = Math.pow(base,exp);

      return new Fraction(1,denominator);
    },

    // Operators. 'f' is the other operand.
    gt: function(f){ return this.dval > f.dval; },
    ge: function(f){ return this.dval >= f.dval; },
    lt: function(f){ return this.dval < f.dval; },
    le: function(f){ return this.dval <= f.dval; },
    eq: function(f){ return this.dval == f.dval; },
    ne: function(f){ return this.dval != f.dval; },

    // Primitive value.
    valueOf: function(){
      return this.dval;
    }

  });

  /* Static operators. */
  Fraction.add = function(f1, f2){
    return new Fraction(f1 + f2);
  };

  Fraction.subtract = function(f1, f2){
    return Fraction.add(f1, -f2);
  };

  Fraction.multiply = function(f1, f2){
    return new Fraction(f1 * f2);
  };

  Fraction.mod = function(f1, f2){
    var scm = GuidoUtils.getSmallestCommonMultiple(
      f1.denominator, f2.denominator );
	  var mul1 = scm / f1.denominator;
    var mul2 = scm / f2.denominator;

    var numerator = (f1.numerator * mul1) % (f2.numerator * mul2);
    var denominator = scm;
    return new Fraction(numerator, denominator);
  };

  // Shortcut constants.
  Fraction.FRAC_N1 = new Fraction(-1, 1);
  Fraction.FRAC_0 = new Fraction(0, 1);
  Fraction.FRAC_7_4 = new Fraction(7, 4);
  Fraction.FRAC_3_2 = new Fraction(3, 2);
  Fraction.FRAC_1 = new Fraction(1);
  Fraction.FRAC_7_8 = new Fraction(7, 8);
  Fraction.FRAC_3_4 = new Fraction(3, 4);
  Fraction.FRAC_1_2 = new Fraction(1, 2);
  Fraction.FRAC_7_16 = new Fraction(7, 16);
  Fraction.FRAC_3_8 = new Fraction(3, 8);
  Fraction.FRAC_1_4 = new Fraction(1, 4);
  Fraction.FRAC_7_32 = new Fraction(7, 32);
  Fraction.FRAC_3_16 = new Fraction(3, 16);
  Fraction.FRAC_1_8 = new Fraction(1, 8);
  Fraction.FRAC_7_64 = new Fraction(7, 64);
  Fraction.FRAC_3_32 = new Fraction(3, 32);
  Fraction.FRAC_3_64 = new Fraction(3, 64);
  Fraction.FRAC_3_128 = new Fraction(3, 128);
  Fraction.FRAC_7_128 = new Fraction(7, 128);
  Fraction.FRAC_7_256 = new Fraction(7, 256);
  Fraction.FRAC_1_12 = new Fraction(1, 12);
  Fraction.FRAC_1_16 = new Fraction(1, 16);
  Fraction.FRAC_1_32 = new Fraction(1, 32);
  Fraction.FRAC_1_64 = new Fraction(1, 64);
  Fraction.FRAC_1_128 = new Fraction(1, 128);
  Fraction.FRAC_MAX = new Fraction(Number.MAX_VALUE);

  return Fraction;

});
