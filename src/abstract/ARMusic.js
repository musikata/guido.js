define(
  [
    './MusicalVoiceList',
    './ARMusicalEvent',
    'guido/misc/KF_IList',
    './Fraction'
],
function(
  MusicalVoiceList,
  ARMusicalEvent,
  KF_IList,
  Fraction
){

  var ARMusic = ARMusicalEvent.extend(MusicalVoiceList.prototype).extend({

    // Constructors
    init: function(){
      // ARMusic()
      if (arguments.length == 0){
        ARMusicalEvent.prototype.init.apply(this);
        // MusicalVoiceList: Owns elements.
        MusicalVoiceList.prototype.init.apply(this, [true]);

        this.maxTagId;
        this.name;
        this.paths;
      }
    },

    adjustDuration: function(newDuration){
      var voice = null;
      var pos = this.GetHeadPosition();
      this.duration = newDuration;
      while (pos.nodeRef){
        voice = this.GetNext(pos);
        voice.adjustDuration(newDuration);
      }
    },

    countVoices: function(){
      return this.getCount();
    },

    getTimeMap: function(f){
      var pos = this.GetHeadPosition();
      var voice = this.GetNext(pos);
      if (voice){
        var mapper = new TimeMapper(f, voice);
        voice.browse(mapper);
      }
    },

    toString: function(){
      var pos = this.GetHeadPosition();
      while (pos.nodeRef){
        var voice = GetNext(pos);
        return voice.toString();
      }
    },

    resetGRRepresentation: function(){
      ARMusicalEvent.prototype.resetGRRrepresentation.apply(this);
      var pos = this.GetHeadPosition();
      while( pos.nodeRef){
        var voice = this.GetNext(pos);
        voice.resetGRRepresentation();
      }
    },

    // @TODO : Implement the AutoBreak algorithm in a separate module,
    // for better readability and testing.
    // Strategy pattern ftw.
    doAutoBreaks: function(){
    },

    MarkVoice: function(){
      // MarkVoice(voicenum, fromnum, fromdenom, lengthnum, lengthdenom, red,
      // green, blue)
      if (arguments.length == 8){
      }
      // MarkVoice(voicenum, from, length, red, green blue)
      else if( arguments.length == 6){
      }
    },

    doAutoStuff: function(){
    },

    removeAutoTags: function(){
    },

    getName: function(){
      return this.name
    },

    setName: function(name){
      this.name = name;
    },

    setPath: function(paths){
      this.paths = paths;
    },

    getPath: function(){
      return this.paths;
    },

  });

  return ARMusic;

});
