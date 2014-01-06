define(
  [
    'underscore',
    './KF_List'
],
function(
  _,
  KF_List
){

  var KF_IList = KF_List.extend({

    // Constructors
    init: function(){
      this.ownsElements;

      // KF_IList()
      if (arguments.length == 0){
        // Call KF_IList(bool ownsElements constructor)
        KF_IList.prototype.init.apply(this, [false]);
      }

      // KF_IList(bool ownsElements)
      else if (arguments.length == 1){
        // Call superclass constructor
        KF_List.prototype.init.apply(this);
        this.ownsElements = arguments[0];
      }
      // KF_IList(KF_Ilist lst, ownselements)
      else if(arguments.length == 2){
        // Call superclass constructor
        KF_List.prototype.init.apply(this);

        // Copy list elements.
        var list = arguments[0];
        this.ownsElements = arguments[1];
        var pos = list.GetHeadPosition();
        while (pos.nodeRef){
          var data = list.GetNext(pos);
          this.AddTail(data);
        }
      }
    },

    GetElementPos: function(data){
      var pos = this.GetHeadPosition();
      while (pos.nodeRef){
        if (data == this.GetAt(pos)){
          return pos;
        }
        this.GetNext(pos);
      }
      return pos;
    },

    RemoveAll: function(pos){
      this.DeleteAllData();
      KF_List.prototype.RemoveAll.apply(this);
    },

    RemoveElement: function(data){
      var pos = this.GetElementPos(data);
      if (pos.nodeRef){
        this.RemoveElementAt(pos);
        return 1;
      }
      return 0;
    },

    RemoveElementAt: function(pos){
      if (this.ownsElements){
        this.DeleteData(pos);
        KF_List.prototype.RemoveElementAt.apply(this, [pos]);
      }
    },

    DumpListAtTail: function(list){
      if (! this.tail){
        this.head = list.head;
        this.tail = list.tail;
        this.count = list.count;
      }
      else if (list.head){
        this.tail.next = list.head;
        list.head.prev = this.tail;
        this.tail = list.tail;
        this.count += list.count;
      }

      list.head = null;
      list.tail = null;
      list.count = 0;
    },

    Cut: function(pos, listPtr){
      listPtr.listRef = new KF_IList(this.ownsElements);
      var node = pos.nodeRef;
      if (node) {
        node = node.next;
        this.SetTailPosition(pos);
        listPtr.listRef.SetHeadPosition({nodeRef: node});
      }
      // Otherwise cut to beginning.
      else{
        listPtr.listRef.SetHeadPosition({nodeRef: this.head});
        this.head = null;
        this.tail = null;
        this.count = 0;
      }
    },

    getCopy: function(){
      var newList = new KF_IList(0);
      var pos = this.GetHeadPosition();
      while (pos.nodeRef){
        newList.AddTail(this.GetNext(pos));
      }
      return newList;
    },

    setOwnership: function(ownsElements){
      this.ownsElements = ownsElements;
    },

    getOwnership: function(){
      return this.ownsElements;
    },

    // The AddSortedXXX Routines assume that the list is
    // already sorted.
    // A new element is placed in the correct sorted position,
    // starting from the head or tail.
    AddSortedHead: function(data, cmp){
      cmp = cmp || function(a,b){ return (a > b); };

      var pos = this.GetHeadPosition();

      // No existing data, set as new head.
      if (! pos.nodeRef){
        this.AddHead(data);
        return;
      }

      while (pos.nodeRef){
        var tmp = this.GetAt(pos);
        var cmpResult = cmp(tmp, data);
        // false: tmp is not bigger than data.
        // true: tmp is bigger than data.
        if (cmpResult >= 1){
          this.AddElementAt(pos, data);
          return;
        }
        this.GetNext(pos);
      }

      // If we're here we've gone through the whole list,
      // so put it at the tail.
      this.AddTail(data);
    },

    AddSortedTail: function(data, cmp){
      cmp = cmp || function(a,b){ return (a < b); };

      var pos = this.GetTailPosition();

      // If no data, set tail.
      if (! pos.nodeRef){
        this.AddTail(data);
        return;
      }

      while (pos.nodeRef){
        var tmp = this.GetAt(pos);
        var cmpResult = cmp(tmp, data);
        // false: tmp is not smaller than data.
        // true: tmp is smaller than data.
        if (cmpResult){
          this.AddElementAfter(pos, data);
          return;
        }
        this.GetPrev(pos);
      }

      // If we're here we've gone through the whole list,
      // so put it at the tail.
      this.AddHead(data);
    },

    DeleteData: function(pos){
      if (this.ownsElements){
        this.SetAt(pos, 0);
      }
    },

    DeleteAllData: function(){
      if (this.ownsElements){
        var pos = this.GetHeadPosition();
        while (pos.nodeRef){
          this.DeleteData(pos);
          this.GetNext(pos);
        }
      }
    }

  });

  return KF_IList;
});
