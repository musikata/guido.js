define(
  [
    '../misc/Class',
    './ObjectList',
    './ARMusicalEvent'
],
function(
  Class,
  ObjectList,
  ARMusicalEvent
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
      }
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

    GetHeadPosition: function(voiceState){
    },

    GetPrevEent: function(pos, voiceState){
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
