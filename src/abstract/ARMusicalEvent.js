define(
  [
    'underscore',
    './ARMusicalObject',
    './Fraction'
],
function(
  _,
  ARMusicalObject,
  Fraction
){

  var ARMusicalEvent = ARMusicalObject.extend({
    // Constructors.
    init: function(){
      this.points;

      // ARMusicalEvent()
      if (arguments.length == 0){
        ARMusicalObject.prototype.init.apply(this);
        this.points = 0;
      }

      else if (arguments.length == 1){
        // ARMusicalEvent(Fraction durationOfEvent)
        if (arguments[0] instanceof Fraction){
          var duration = arguments[0];

          ARMusicalObject.prototype.init.apply(this);

          this.duration = duration;
          this.points = 0;
        }

        // ARMusicalEvent(ARMusicalEvent)
        else if (arguments[0] instanceof ARMusicalEvent){
          var arMusicalEvent = arguments[0];

          ARMusicalObject.prototype.init.apply(this, [arMusicalEvent]);

          this.points = arMusicalEvent.points;
        }
      }

      else if (arguments.length == 2){
        // ARMusicalEvent(int numerator, int denominator)
        if (_.isNumber(arguments[0]) && _.isNumber(arguments[1])){
          ARMusicalObject.prototype.init.apply(this);

          this.duration.set(arguments[0], arguments[1]);
        }

        // ARMusicalEvent(Fraction relativeTimePosition, Fraction duration)
        else if (
          (arguments[0] instanceof Fraction)
            && (arguments[1] instanceof Fraction)
        ){
          var relativeTimePos = arguments[0];
          var duration = arguments[1];

          ARMusicalObject.prototype.init.apply(this, [relativeTimePos]);

          this.duration = duration;
          this.points = 0;
        }
      }
    },

    Copy: function(){
      return new ARMusicalEvent(this);
    },

    toString: function(){},

    setDenominator: function(denominator){
      this.duration.setDenominator(denominator);
    },

    setNumerator: function(numerator){
      this.duration.setNumerator(numerator);
    },

    // points as in 'dots'.
    setPoints: function(pointCount){
      this.points = pointCount;
      var origDuration = new Fraction(this.duration);
      // Shift denominator by powers of two.
      for (var i=1, denominator =1; i <= this.points; i++){
        denominator <<= 1;
        var dotDur = Fraction.multiply(
          origDuration, new Fraction(1, denominator));
        this.duration = Fraction.add(this.duration, dotDur);
      }
    },

    getPoints: function(){
      return this.points;
    },

    setPointsNoDurationChange: function(pointCount){
      this.points = pointCount;
    },

    CanBeMerged: function(otherEvent){
      // We determine if two events are the same type
      // by checking their init methods.
      return (this.init == otherEvent.init);
    },

    isEventClass: function(){
      return true;
    }

  });

  return ARMusicalEvent;

});
