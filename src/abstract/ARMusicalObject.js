define(
  [
    'underscore',
    'guido/misc/Class',
    './Fraction'
],
function(
  _,
  Class,
  Fraction
){

  var ARMusicalObject = Class.extend({

    // Constructors.
    init: function(){
      this.relativeTimePosition;
      this.duration;
      this.voiceNum;
      this.drawGR;
      this.grObject;

      // ARMusicalObject()
      if (arguments.length == 0){
        this.relativeTimePosition = Fraction.FRAC_0;
        this.duration = Fraction.FRAC_0;
        this.voiceNum = 0;
        this.drawGR = true;
        this.grObject = null;
      }

      else if (arguments.length == 1){

        // ARMusicalObject(Fraction relativeTimePositionOfMusicalObject)
        if (arguments[0] instanceof Fraction){
          this.relativeTimePosition = arguments[0];
          this.duration = Fraction.FRAC_0;
          this.voiceNum = 0;
          this.drawGR = true;
          this.grObject = null;
        }

        // ARMusicalObject(ARMusicalObject arMusicalObject);
        else if (arguments[0] instanceof ARMusicalObject){
          var srcMusicalObject = arguments[0];
          var propsToCopy = [
            'relativeTimePosition',
            'duration',
            'voiceNum',
            'drawGR'
          ];
          _.each(propsToCopy, function(prop){
            this[prop] = srcMusicalObject[prop];
          }, this);
          this.grObject = null;
        }
      }
    },

    setDuration: function(dur){
      this.duration = dur;
    },

    getDuration: function(){
      return this.duration;
    },

    setStartTimePosition: function(pos){},

    setRelativeTimePosition: function(relativeTimePosition){
      this.relativeTimePosition = relativeTimePosition;
    },

    getRelativeTimePosition: function(){
      return this.relativeTimePosition;
    },

    setRelativeEndTimePosition: function(timePos){
      this.duration = Fraction.subtract(timePos, this.relativeTimePosition);
    },

    getRelativeEndTimePosition: function(){
      return Fraction.add(this.relativeTimePosition, this.duration);
    },

    setVoiceNum: function(num){
      this.voiceNum = num;
    },

    getVoiceNum: function(){
      return this.voiceNum;
    },

    setDrawGR: function(onoff){
      this.drawGR = onoff;
    },

    getDrawGR: function(){
      return this.drawGR;
    },

    Copy: function(){
      return new ARMusicalObject(this);
    },

    toString: function(){
      return "ARMusicalObject:" +
        " duration: " + this.duration.toString() + ';' +
        " time pos: " + this.relativeTimePosition.toString() + ';';
    },

    addGRRepresentation: function(grRepresentation){
      throw new Error('NOT YET IMPLEMENTED');
    },

    getGRRepresentation: function(){
      return this.grObject;
    },

    removeGRRepresentation: function(){
      throw new Error('NOT YET IMPLEMENTED');
    },

    resetGRRepresentation: function(){
      throw new Error('NOT YET IMPLEMENTED');
    },

    getFirstGRRepresentation: function(){
      throw new Error('NOT YET IMPLEMENTED');
    },

    getLastGRRepresentation: function(){
      throw new Error('NOT YET IMPLEMENTED');
    },

    isEventClass: function(){
      return false;
    },

    browse: function(mapper){}

  });

  return ARMusicalObject;

});
