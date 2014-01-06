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

    /** \brief Introduces potential Breakpoints
      in the first voice of a piece of music.

      These potential Breakpoints are later used to actually do newSystem or newPage, if they
      have not been introduced already.
      The potential Breaks are given evaluation-values,that is, their break-potential is evaluated.
      This is done with respect to barline-positions. That is, a place, where all voices have barlines is
      a better break-place than one, that has no or only some barlines.
      The algorithm works as follows:
      The voices are traversed in parallel. newSystem or newPage-Tags are recognized;
      if there is no newSystem or newPage-Tag at a Tag-Position and if ALL voices have no current
      event, a potential break is introduced.
      */

    doAutoBreaks: function(){
      var managerList = new KF_IList(true);
      var pos = this.GetHeadPosition();
      var voice;
      var count;
      while (pos.nodeRef){
        voice = this.GetNext(pos);
        count += 1;
        managerList.AddTail(new ARVoiceManager(voice));
      }

      var ender;
      var timePos = Fraction.FRAC_0;
      var minSwitchTimePos;
      var minTimePos;

      var fillTagMode = true;
      var contTagMode = false;
      var newline;
      var modeError = true;
      var autoBreak = true;

      do {
        ender = true;
        contTagMode = false;
        modeError = false;
        minTimePos = Fraction.FRAC_MAX;
        minSwitchTimePos = Fraction.FRAC_MAX;

        newline = 0;
        autoBreak = true

        var tmpTimePos;

        var pos = managerList.GetHeadPosition();
        while (pos.nodeRef){
          var voiceManager = managerList.GetNext(pos);
          tmpTimePos = timePos;

          var ret = voiceManager.Iterate(tmpTimePos, fillTagMode);

          var curAutoState = voiceManager.curVoiceState.curAutoState;
          if (curAutoState && curAutoState.getSystemBreakState() == ARAuto.OFF){
            autoBreak = false;
          }

          if (ret != ARVoiceManager.MODE_ERROR){
            modeError = false;
          }

          if (ret != ARVoiceManager.END_OF_VOICE){
            ender = false;

            if ( (ret = ARVoiceManager.CURTPBIGGER_ZEROFOLLOWS)
                || (ret == ARVoiceManager.DONE_ZEROFOLLOWS) )
            {
              if (tmpTimePos.lt(minSwitchTimePos)){
                minSwitchTimePos = tmpTimePos;
              }
            }

            if (fillTagMode){
              if (ret == ARVoiceManager.NEWSYSTEM){
                if (! newLine){
                  newLine = 1;
                }
              }
              else if (ret == ARVoiceManager.NEWPAGE){
                if (! newLine || newLine == 1){
                  newLine = 2;
                }
              }
              else if (ret == ARVoiceManager.DONE_ZERO_FOLLOWS){
                contTagMode = true;
              }
            }
            else {
              if (
                (ret == ARVoiceManager.DONE)
                || (ret == ARVoiceManager.DONE_EVFOLLOWS)
                || (ret == ARVoiceManager.DONE_ZERO_FOLLOWS)
                || (ret == ARVoiceManager.CURTPBIGGER_EVFOLLOWS)
                || (ret == ARVoiceManager.CURTPBIGGER_ZEROFOLLOWS)
              ){
                if (tmpTimePos < minTimePos){
                  minTimePos = tmpTimePos;
                }
              }
            } // if fillTagMode
          } // if != ender
        } // while (pos.nodeRef)

        // now we have worked on a complete slice ...
      }
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
