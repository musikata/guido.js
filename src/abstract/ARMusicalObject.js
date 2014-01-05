define(
  [
    'underscore',
    './Fraction'
],
function(
  _,
  Fraction
){

  // Constructors.
  var ARMusicalObject = function(){
    this.relativeTimePosition;
		this.duration;
		this.fVoiceNum;
		this.drawGR;
		this.mGrObject;

    // ARMusicalObject()
    if (arguments.length == 0){
    }

    if (arguments.length == 1){

      // ARMusicalObject(Fraction relativeTimePositionOfMusicalObject)
      if (arguments[0] instanceof Fraction){
      }

      // ARMusicalObject(ARMusicalObject arMusicalObject);
      else if (arguments[0] instanceof ARMusicalObject){
      }

    }
  };

  _.extend(ARMusicalObject.prototype, {

		getDuration: function(){
      return this.duration;
    },

		setDuration: function(dur){
      this.duration = dur;
    },

		setStartTimePosition: function(pos){},

		getRelativeTimePosition: function(){
      return this.relativeTimePosition;
    },

		setRelativeTimePosition: function(newRelativeTimePosition){},

		getRelativeEndTimePosition: function(){},

		setRelativeEndTimePosition: function(tp){
      this.duration = tp - this.relativeTimePosition;
    },

		setVoiceNum: function(num){
      this.fVoiceNum = num;
    },

		getVoiceNum: function(){
      return fVoiceNum;
    },

    setDrawGR: function(onoff){
      this.drawGR = onoff;
    },

    getDrawGR: function(){
      return drawGR;
    },

		Copy: function(){},

    toString: function(){},

		addGRRepresentation: function(p_grep){},

		getGRRepresentation: function(){
      return this.mGrObject;
    },

		removeGRRepresentation: function(){},

		resetGRRepresentation: function(){},

		getFirstGRRepresentation: function(){},

		getLastGRRepresentation: function(){},

		isEventClass: function(){
      return false;
    },

		browse: function(mapper){
    }

  });

  return ARMusicalObject;

});
