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

      // ARMusicalObject(Fraction relativeTimePositionOfMusicalObject)
      // ARMusicalObject(ARMusicalObject arMusicalObject);
      else if (arguments[0] instanceof ARMusicalObject){
      }

    }
  };

  _.extend(ARMusicalObject.prototype, {
		Copy: function(){},

		removeGRRepresentation: function(){},

		getDuration: function(){
      return this.duration;
    },

		getRelativeTimePosition: function(){
      return this.relativeTimePosition;
    },

		getRelativeEndTimePosition: function(){},

    toString: function(){},

		setStartTimePosition: function(pos){},

		setRelativeTimePosition: function(newRelativeTimePosition){},

		setRelativeEndTimePosition: function(tp){
      this.duration = tp - this.relativeTimePosition;
    },

		setDuration: function(dur){
      this.duration = dur;
    },

		getFirstGRRepresentation: function(){},

		getLastGRRepresentation: function(){},

		getGRRepresentation: function(){
      return this.mGrObject;
    },

		addGRRepresentation: function(p_grep){},

		resetGRRepresentation: function(){},

		isEventClass: function(){
      return false;
    },

		browse: function(mapper){
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
    }
  });

  return ARMusicalObject;

});
