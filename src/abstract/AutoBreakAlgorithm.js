define(
  [
],
function(
){
  // @TODO: CLEAN THIS UP!
  // ADAPT TO TAKE AN ARMusic object as a parameter.
  var AutoBreakAlgorithm = function(){
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
      if (fillTagMode){ 
        if (modeError){
          if (! contTagMode){
            fillTagMode = false;
          }
        }
        else{
          if (! contTagMode){
            if (newLine){
              var pos = managerList.GetHeadPosition();
              while (pos.nodeRef){
                managerList.GetNext(pos).InsertBreak(timePos, newLine);
              }
              contTagMode = true;
            }
          }

          if (! contTagMode){
            var value = 0;
            var count = 0;
            var pos = managerList.GetHeadPosition();
            while (pos.nodeRef){
              value += managerList.GetNext(pos).CheckBreakPosition(timePos);
              count += 1;
            }

            GuidoUtils.assert( count > 0);
            value /= count;

            if ((value >= 0) && autoBreak){
              var pos = managerList.GetHeadPosition();
              while (pos.nodeRef){
                managerList.GetNext(pos).InsertBreak(timePos, 3, value);
              }
            }
            fillTagMode = false;
          } // if (! contTagMode)
        } // else modeError
      } // if (fillTagMode)

      // ! fillTagMode
      else{
        if (minTimePos.ne(Fraction.MAX_FRAC)){
          timePos = minTimePos;
        }
        else if (! ender){
          GuidoUtils.assert(false);
        }

        if (minSwitchTimePos.eq(timePos)){
          fillTagMode = true;
        }
        else{
          var value = 0;
          var count = 0;
          var pos = managerList.GetHeadPosition();
          while(pos.nodeRef){
            value += managerList.GetNext(pos).CheckBreakPosition(timePos);
            count += 1;
          }

          GuidoUtils.assert(count > 0);
          value /= count;

          if ((value >= 0) && autoBreak){
            var pos = managerList.GetHeadPosition();
            while (pos.nodeRef){
              managerList.GetNext(pos).InsertBreak(timePos, 3, value);
            }
          }
        }
      } // else (fillTagMode)
    } while (! ender);
  }
});
