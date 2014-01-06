define(
  [
    'underscore',
    'guido/misc/KF_IList'
],
function(
  _,
  KF_IList
){
  var MusicalVoiceList = function(){
    KF_IList.apply(this, arguments);
  };

  _.extend(MusicalVoiceList.prototype, KF_IList.prototype);

  return MusicalVoiceList;
});
