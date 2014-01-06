/*
 * An abstract class for implementing a doubly-linked list:
 * http://en.wikipedia.org/wiki/Doubly_linked_list
 * This class is used through Guido.
 *
 * Note that we have to be careful about passing references to objects.
 * Many of the idioms that worked in the original GuidoEngine C++ code
 * won't work here in JS, due to how Javascript's of passing *copies* of
 * references of objects to functions, rather than the references themselves.
 */
define(
  [
    'underscore',
    './Class',
    'guido/GuidoUtils',
    './KF_ListNode'
],
function(
  _,
  Class,
  GuidoUtils,
  KF_ListNode
){

  var KF_List = Class.extend({
    init: function(){
      // Constructors
      this.head;
      this.tail;
      this.count;

      // KF_List()
      if (arguments.length == 0){
        this.count = 0;
      }
    },

    size: function(){
      return this.count;
    },

    empty: function(){
      return (this.count == 0);
    },

    push_back: function(data){
      return this.AddTail(data);
    },

    insert: function(pos, data){
      return this.AddElementAt(pos, data);
    },

    back: function(){
      return this.GetTail();
    },

    front: function(){
      return this.GetHead();
    },

    ResetListNoDelete: function(){
      this.head = null;
      this.tail = null;
      this.count = 0;
    },

    RemoveAll: function(){
      var curNode = this.head;
      while (curNode){
        var nextNode = curNode.next;
        this.RemoveElementAt({nodeRef: curNode});
        curNode = nextNode;
      }
      this.head = null;
      this.tail = null;
      this.count = 0;
    },

    RemoveElementAt: function(pos){
      var node = pos.nodeRef;

      if (! node){
        return;
      }

      if (node.prev){
        node.prev.next = node.next;
      }

      if (node.next){
        node.next.prev = node.prev;
      }

      if (node == this.head){
        this.head = node.next;
      }

      if (node == this.tail){
        this.tail = node.prev;
      }

      this.count -= 1;
    },

    RemoveTail: function(){
      if (! this.tail){
        return undefined;
      }

      var beforeTail = this.tail.prev;
      var tailData = this.tail.data;

      if (this.tail == this.head){
        delete this.tail;
        this.count = 0;
      }
      else {
        delete this.tail;
        this.tail = beforeTail;
        this.tail.next = null;
        this.count -= 1;
      }

      return tailData;
    },

    AddTail: function(data){
      var node = new KF_ListNode(data, this.tail);
      if (this.tail){
        this.tail.next = node;
      }
      else{
        this.head = node;
      }

      this.tail = node;
      this.count += 1;

      return {nodeRef: this.tail};
    },

    // Inserts data before the given node.
    AddElementAt: function(pos, data){
      if ( (! pos.nodeRef) || (pos.nodeRef == this.head) ){
        return this.AddHead(data);
      }

      var thisNode = pos.nodeRef;
      var newNode = new KF_ListNode(data, thisNode.prev);
      newNode.next = thisNode;
      thisNode.prev.next = newNode;
      thisNode.prev = newNode;

      this.count += 1;
      return {nodeRef: newNode};
    },

    // Inserts data after the given node.
    AddElementAfter: function(pos, data){
      if ( (! pos.nodeRef) || (pos.nodeRef == this.tail) ){
        return this.AddTail(data);
      }

      var thisNode = pos.nodeRef;
      var newNode = new KF_ListNode(data, thisNode);
      newNode.next = thisNode.next;
      thisNode.next.prev = newNode;
      thisNode.next = newNode;

      this.count += 1;
      return {nodeRef: newNode};
    },


    // @TODO: check whether these two methods are used.
    // They may be defunct, per kf_list.h comments...
    GetCount: function(){
      return this.count;
    },

    IsEmpty: function(){
      return (this.count == 0);
    },

    SetTailPosition: function(pos){
      this.tail = pos.nodeRef;
      if (this.tail){
        this.tail.next = null;
      }

      // Re-count.
      this.count = 0;
      var curNode = this.head;
      while (curNode){
        this.count += 1;
        // Check for circular linkage.
        if (! curNode.next){
          GuidoUtils.assert(curNode === this.tail);
        }
        curNode = curNode.next;
      }

      return {nodeRef: this.tail};
    },

    SetHeadPosition: function(pos){
      GuidoUtils.assert(! this.head);
      GuidoUtils.assert(! this.tail);

      this.head = pos.nodeRef;
      if (this.head){
        this.head.prev = null;
      }

      // then we have to recount!
      this.count = 0;
      var curNode = this.head;
      while (curNode){
        this.count += 1;
        if (! curNode.next){
          this.tail = curNode;
        }
        curNode = curNode.next;
      }

      return {nodeRef: this.head};
    },

    Cut: function(pos, listPtr){
      listPtr.listRef = new KF_List();
      var node = pos.nodeRef;
      // Cut to node.
      if (node){
        var newListHead = node.next;
        // Set tail of current list.
        this.SetTailPosition(pos);
        // And head of new list.
        listPtr.listRef.SetHeadPosition({nodeRef: newListHead});
      }
      // Otherwise cut to beginning.
      else{
        listPtr.listRef.SetHeadPosition({nodeRef: this.head});
        this.head = 0;
        this.tail = 0;
        this.count = 0;
      }
    },

    GetHeadPosition: function(){
      return {nodeRef: this.head};
    },

    GetTailPosition: function(){
      return {nodeRef: this.tail};
    },

    GetNext: function(pos){
      var tmp = pos.nodeRef;
      pos.nodeRef = tmp.next;
      return tmp.data;
    },

    GetPrev: function(pos){
      var tmp = pos.nodeRef;
      pos.nodeRef = tmp.prev;
      return tmp.data;
    },

    GetAt: function(pos){
      return pos.nodeRef.data;
    },

    SetAt: function(pos, data){
      pos.nodeRef.data = data;
    },

    Get: function(cnt){
      var tmpCnt = 1;
      var pos = this.GetHeadPosition();
      while (pos.nodeRef){
        var data = this.GetNext(pos);
        if (tmpCnt == cnt){
          return data;
        }
        tmpCnt += 1;
      }

      return null;
    },

    AddHead: function(data){
      var node = new KF_ListNode(data, null);

      if (this.head){
        this.head.prev = node;
        node.next = this.head;
      }
      else{
        this.tail = node;
      }
      this.head = node;
      this.count += 1;

      return {nodeRef: this.head};
    },

    RemoveHead: function(){
      if (! this.head){
        return null;
      }

      var data = this.head.data;

      if (this.head == this.tail){
        this.head = null;
        this.tail = null;
      }
      else{
        this.head = this.head.next;
        this.head.prev = null;
      }

      this.count -= 1;

      return data;
    },

    GetHead: function(){
      if (this.head){
        return this.head.data;
      }
      else{
        return null;
      }
    },

    GetTail: function(){
      if (this.tail){
        return this.tail.data;
      }
      else{
        return null;
      }
    },

		// A sort-function, taking as an argument
		// a function, that compares elements
		// and returns -1 for smaller,
		// 0 for equal and 1 for bigger.
    sort: function(cmp){
      var needsSort = true;
      while (needsSort){
        needsSort = false;
        var pos = this.GetHeadPosition();
        while (pos.nodeRef){
          var pos1 = {nodeRef: pos.nodeRef};
          var t1 = this.GetNext(pos);
          if (pos.nodeRef){
            var t2 = this.GetAt(pos);
            var cmpResult;
            if (cmp){
              cmpResult = cmp(t1, t2);
            }
            else{
              // WATCH OUT!!!
              // This is from the original Guido C++ code,
              // which took advantage of operator overloading.
              // We don't have overloading here. So if we leave this as-is,
              // we will need to count on all of our node data objects
              // to sensibly implement valueOf.
              // - A. Dorsk.
              cmpResult = (t1 > t2);
            }
            if (cmpResult){
              this.SetAt(pos1, t2);
              this.SetAt(pos, t1);
              needsSort = true;
            }
          }
        }
      }
    }

  });

  return KF_List;

});
