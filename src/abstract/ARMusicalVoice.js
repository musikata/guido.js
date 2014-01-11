define(
  [
    '../misc/Class',
    './ObjectList',
    './ARMusicalEvent',
    './Fraction',
    '../GuidoUtils'
],
function(
  Class,
  ObjectList,
  ARMusicalEvent,
  Fraction,
  GuidoUtils
){

  var ARMusicalVoice = ARMusicalEvent.extend(ObjectList.prototype).extend({
    // Constructors.
    init: function(){

      this.currentChord;
      this.currentShareLocation;
      this.chordGrouplist;
      this.posFirstInChord;
      this.numChordVoice;
      this.chordBeginState;
      this.sum;
      this.pitchSum;
      this.voiceNum;
      this.lastEvPosition;
      this.curVoiceState;
      this.endState;
      this.beamState;
      this.readMode;
      this.posTagList;
      this.startPosTagList;

      // ARMusicalVoice()
      if (arguments.length == 0){
        // Owns on elements.
        ObjectList.prototype.init.apply(this, [true]);
        ARMusicalEvent.prototype.init.apply(this);
        this.currentChord = null;
        this.currentShareLocation = null;
        this.chordGroupList = null;
        this.numChordVoice = -1;
        this.chordBeginState = null;
        this.voiceNum = 0;
        this.endState = null;
        this.readMode = 'CHORDMODE';
        this.posStagList =  null;

        this.startPosTagList = new StartPositionTagList(false);
        this.lastEvPosition = null;
        this.pitchSum = 0;
        this.sum = 0;

        this.curVoiceState = new ARMusicalVoiceState();
      }
    },

    // Not clear to me yet what is happening here.
    // There seem to be some state flags involved though, for
    // different behaviors in different states.
    GetHeadPosition: function(voiceState){
      voiceState.DeleteAll();
      voiceState.vpos = ObjectList.prototype.GetHeadPosition.apply(this);
      if (this.posTagList){
        voiceState.ptagpos = this.posTagList.GetHeadPosition();
      }
      else{
        voiceState.ptagpos = null;
      }

      if (voiceState.vpos == null){
        voiceState.curtp = Fraction.FRAC_0;
        return voiceState.vpos;
      }

      var obj = this.GetAt(voiceSate.vpos);

      if (this.posTagList){
        while (voiceState.ptagpos.nodeRef){
          var ptag = this.posTagList.GetAt(voiceState.ptagpos);
          var arTagEnd = ptag.toTagEnd();
          if (arTagEnd){
            break;
          }
          else if(ptag.getPosition().nodeRef == voiceState.vpos.nodeRef){
            voiceState.AddPositionTag(ptag);
          }
          else{
            break;
          }
          this.posTagList.GetNext(voiceState.ptagpos);
        }
      }

      if (obj){
        voiceState.curtp = obj.getRelativeTimePosition();
      }
      else{
        voiceState.curtp = Fraction.FRAC_0;
      }

      if (this.readMode == 'CHORDMODE' && voiceState.curChordTag){
        GuidoUtils.assert(! voiceState.chordState);
        GuidoUtils.assert(! voiceState.prevChordState);

        voiceState.prevChordState = null;
        voiceState.chordState = new ARMusicalVoiceState(voiceState);
      }

      return voiceState.vpos;

    },

    // @TODO: Figure out what the heck is going on here.
    //
    // Looks this method gets called when
    // inserting breaks, to go back a position?
    // Per the comments in the c++ code.
    GetPrevEent: function(pos, voiceState){
      voiceState.DeleteAddedAndRemovedPTags();
      var tmpPos = {nodeRef: pos.nodeRef};
      if (! tmpPos.nodeRef){
        tmpPos = this.GetTailPosition();
      }
      else{
        this.GetPrev(tmpPos);
      }

      // ar should be an event
      var ar = this.GetAt(tmpPos);
      GuidoUtils.assert(ar instanceof ARMusicalEvent);

      // this is set, if the previous is event is a chord; if this is the case, we can use
      // // the previous-chordstate to set the current voice state.
      var prevIsChord = 0;
      var savedChordTag = voiceState.curChordTag;

      // check the Position-Tags (End) do the following:
      // - remove those tags, that have starting-pos == pos
      // - add those tags, that have ending-pos == pos
      //   AND have not starting-pos == pos
      if (this.posTagList){
        var ptagTmpPrevPos = {nodeRef: null};
        if (voiceState.ptagPos.nodeRef == null){
          voiceState.ptagPos = this.posTagList.GetTailPosition();
          while (voiceState.ptagPos.nodeRef){
            ptagTmpPrevPos.nodeRef = voiceState.ptagPos.nodeRef;
            var arPosTag = this.posTagList.GetPrev(voiceState.ptagPos);
            var arTagEnd = arPosTag.toARTagEnd();

            if (arTagEnd && arTagEnd.getPosition().nodeRef == tmpPos.nodeRef){
              voiceState.AddPositionTag(arPosTag.getCorrespondence());
              if (
                (this.readMode == 'CHORDMODE')
                  && (savedChordTag != voiceState.curChordTag)
              ){
                // Then the previous event is a chord.
                if (voiceState.prevChordState){
                  GuidoUtils.assert(
                    voiceState.chordState || voiceState.prevChordState);
                  prevIsChord = 1;
                  break;
                }
              }
            } // if (arTagEnd ...
            else{
              // then the position is set to the next following one.
              this.posTagList.GetNext(ptagTmpPrevPos);
              voiceState.ptagPos = ptagTmpPrevPos.nodeRef;
              break;
            }
          }
        } // if (voiceState.ptagPos.nodeRef == null ...
        else{
          while (voiceState.ptagPos.nodeRef){
            ptagTmpPrevPos.nodeRef = voiceState.ptagPos.nodeRef;
            this.posTagList.GetPrev(voiceState.ptagPos);

            // it can be, that there is NO previous entry in the position tags ...
            if (! voiceState.ptagPos.nodeRef){
              voiceState.ptagPos.nodeREf = ptagTmpPrevPos.nodeRef;
              break;
            }

            var arPosTag = this.posTagList.GetAt(voiceState.ptagPos);
            var arTagEnd = arPosTag.toARTagEnd();
            if (! arTagEnd && (arPosTag.getPosition().nodeRef == pos.nodeRef)){
              // these are the PositionTags that point to the second eventposition
              voiceState.RemovePositionTag(arPosTag);
            }
            else if(arTagEnd && (arPosTag.getPosition().nodeRef == tmpPos.nodeRef)){
              // these point to the first event (the one that will be the current event ...)
              voiceState.AddPositionTag(arPosTag.getCorrespondence());
              if ( (this.readMode == 'CHORDMODE') && (savedChordTag != voiceState.curChordTag)){
                // then the previous event is a chord
                GuidoUtils.assert(voiceState.chordState || voiceState.prevChordState);
                prevIsChord = 1;
                break;
              }

            }
            else{
              // then we are finished.
              this.posTagList.GetNext(voiceState.ptagPos);
              break;
            }
          }
        }
      }

      if (prevIsChord){
        var tmp = null;
        GuidoUtils.assert(voiceState.prevChordState);
        tmp = new ARMusicalVoiceState(voiceState.prevChordState);
        GuidoUtils.assert(tmp);
        voiceState = tmp;
        voiceState.chordState = tmp;
        pos.nodeRef = voiceState.vPos.nodeRef;
        return;
      }

      pos.nodeRef = tmpPos.nodeRef;
      voiceState.vPos = pos.nodeRef;
      voiceState.curTimePos = ar.GetRelativeTimePosition();
    },

    MarkVoice: function(){
    },

    initChordNote: function(){
    },

    FinishChord: function(){
    },

    BeginChord: function(){
    },

    setTrillChord: function(type, accidental){
    },

    setClusterChord: function(cluster){
    },

    removeTag: function(musicalObject){
    },

    SplitEventAtPos: function(voiceState, timePos, tieOrMerge){
    },

    DispdurToTupletdur: function(duration, base){
    },

    TupletdurToDispdur: function(duration, base){
    },

    DurationIsDisplayable: function(duration, b_punkt){
    },

    DurationFitsBase: function(duration, base, newBase){
    },

    ConvertToNormalForm: function(){
    },

    getLastEventPosition: function(){
    },

    setPositionTagEndPos: function(id, tag, start){
    },

    RemovePositionTag: function(tag){
    },

    AddPositionTag: function(tag){
    },

    createPositionTagList: function(){
    },

    doAutoStuff1: function(){
    },

    doAutoStuff2: function(){
    },

    doAutoTrill: function(){
    },

    doAutoCluster: function(){
    },

    getPosAtTimePosition: function(timePos){
    },

    getARMusicalObjectsAtTimePosition: function(timePos){
    },

    AddTail: function(newMusicalObject){
    },

    InsertAtTail: function(newMusicalObject){
    },

    adjustDuration: function(newDuration){
    },

    toString: function(){
    },

    browse: function(){
      // browse(mapper)
      if (arguments.length == 1){
      }
      // browse(mapper, voiceState)
      else if (arguments.length == 2){
      }
      // browse(mapper, start, end)
      else if (arguments.length == 3){
      }
    },

    resetGRRepresentation: function(){
    },

    GetNext: function(pos, voiceState){
    },

    getVoiceState: function(){
      return this.curVoiceState;
    },

    setVoiceNum: function(num){
      this.voiceNum = num;
    },

    getVoiceNum: function(){
      return this.voiceNum;
    },

    removeAutoTags: function(){
    },

    setReadMode: function(newReadMode){
      this.readMode = newReadMode;
    },

    getReadMode: function(){
      return this.readMode;
    },

    doAutoKeys: function(){
    },

    doAutoDispatchLyrics: function(){
    },

    doAutoFermatas: function(){
    },

    doAutoTies: function(){
    },

    doAutoCheckStaffStateTags: function(){
    },

    doAutoDisplayCheck: function(){
    },

    doAutoBarLines: function(){
    },

    doAutoEndBar: function(){
    },

    doAutoBeaming: function(){
    },

    doAutoGlissando: function(){
    },

    doAutoFeatheredBeam: function(){
    },

    doMicroTonal: function(){
    },

    CloseBase: function(curBase, autoTuplet, lastEvPos, FLA){
    },

    ReplacePositionTag: function(oldTag, newTag, voiceState, endTagName){
    },

    InsertDisplayDurationTag: function(dispDur, b_punkt, timePos, pos, voiceState, setPTagPos){
    },

    beamLookAhead: function(pos, unit){
    },

    CopyChord: function(voiceState, timePos, newDur){
    },

    newAutoClef: function(oldClef, timePos){
    },

    newAutoKey: function(oldKey, timePos){
    }

  });

  return ARMusicalVoice;

});
