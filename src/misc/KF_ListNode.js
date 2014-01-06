define(
  [
],
function(
){
  // Constructors
  var KF_ListNode = function(){

    this.data;
    this.next;
    this.prev;

    //KF_LisNode(data, KF_ListNode prev)
    if (arguments.length == 2){
      this.data = arguments[0];
      this.prev = arguments[1];
    }
  };

  return KF_ListNode;
});
