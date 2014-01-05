define(
  [
    'guido/misc/KF_List'
],
function(
  KF_List
){
  ddescribe('KF_List', function(){
    it('should be defined', function(){
      expect(KF_List).toBeDefined();
    });

    it('should construct via KF_List()', function(){
      var l = new KF_List();
      expect(l instanceof KF_List).toBe(true);
    });

    it('should size()', function(){
      var l = new KF_List();
      var n = 3;
      for (var i=0; i < n; i++){
        l.AddHead(i);
      }
      expect(l.size()).toBe(n);
    });

    it('should empty()', function(){
      var l = new KF_List();
      expect(l.empty()).toBe(true);
      l.AddHead('foo');
      expect(l.empty()).toBe(false);
    });

    it('should push_back(data)', function(){
      var l = new KF_List();
      var data = 'foo';
      l.push_back(data);
      expect(l.GetTail()).toBe(data);
    });

    it('should insert(pos, data)', function(){
      var l = new KF_List();
      var tailPos = l.push_back('tail');
      var insertedPos = l.insert(tailPos, 'beforeTail');
      var beforeTail = tailPos.nodeRef.prev;
      expect(beforeTail.data).toBe('beforeTail');
      expect(insertedPos.nodeRef).toBe(beforeTail);
    });

    it('should back()', function(){
      var l = new KF_List();
      l.push_back('tail');
      expect(l.back()).toBe('tail');
    });

    it('should front()', function(){
      var l = new KF_List();
      l.AddHead('head');
      expect(l.front()).toBe('head');
    });

    it('should ResetListNoDelete', function(){
      var l = new KF_List();
      l.AddHead('head');
      l.AddTail('tail');
      l.ResetListNoDelete();
      expect(l.head).toBe(null);
      expect(l.tail).toBe(null);
      expect(l.count).toBe(0);
    });

    it('should RemoveAll', function(){
      var l = new KF_List();
      for (var i = 0; i < 5; i++){
        l.AddHead(i);
      }
      l.RemoveAll();
      expect(l.head).toBe(null);
      expect(l.tail).toBe(null);
      expect(l.count).toBe(0);
    });

    it('should RemoveElementAt', function(){
      var l = new KF_List();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddHead(i));
      }
      expect(l.GetAt(positions[3])).toBe(3)
      l.RemoveElementAt(positions[3]);
      expect(l.count).toBe(4);
    });

    it('should RemoveTail', function(){
      var l = new KF_List();
      l.AddTail('foo');
      l.RemoveTail();
      expect(l.count).toBe(0);
    });

    it('should AddTail', function(){
      var l = new KF_List();
      l.AddTail('foo');
      expect(l.tail.data).toBe('foo');
    });

    it('should AddElementAt', function(){
      var l = new KF_List();
      var tailPos = l.AddTail('foo');
      l.AddElementAt(tailPos, 'bar');
      expect(l.tail.prev.data).toBe('bar');
    });

    it('should AddElementAfter', function(){
      var l = new KF_List();
      var tailPos = l.AddTail('foo');
      l.AddElementAfter(tailPos, 'bar');
      expect(l.tail.data).toBe('bar');
    });

    it('should GetCount', function(){
      var l = new KF_List();
      var tailPos = l.AddTail('foo');
      expect(l.GetCount()).toBe(1);
    });

    it('should IsEmpty', function(){
      var l = new KF_List();
      expect(l.IsEmpty()).toBe(true);
      var tailPos = l.AddTail('foo');
      expect(l.IsEmpty()).toBe(false);
    });

    it('should SetTailPosition', function(){
      var l = new KF_List();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      l.SetTailPosition(positions[3]);
      expect(l.GetTail()).toBe(3);
      expect(l.GetCount()).toBe(4);
    });

    it('should SetHeadPosition', function(){
      var l = new KF_List();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      var l2 = new KF_List();
      l2.SetHeadPosition(positions[3]);
      expect(l2.GetHead()).toBe(3);
      expect(l2.GetCount()).toBe(2);
    });

    describe('Cut', function(){
      it('should Cut to node', function(){
        var l = new KF_List();
        var positions = [];
        for (var i = 0; i < 5; i++){
          positions.push(l.AddTail(i));
        }
        var listPtr = {};
        l.Cut(positions[3], listPtr);
        var newList = listPtr.listRef;
        expect(l.GetCount()).toBe(4);
        expect(newList.GetCount()).toBe(1);
      });

      it('should cut to beginning', function(){
        var l = new KF_List();
        var positions = [];
        for (var i = 0; i < 5; i++){
          positions.push(l.AddTail(i));
        }
        var listPtr = {};
        l.Cut({}, listPtr);
        var newList = listPtr.listRef;
        expect(l.GetCount()).toBe(0);
        expect(newList.GetCount()).toBe(5);
      });
    });

    it('should GetHeadPosition', function(){
      var l = new KF_List();
      var headPos = l.AddHead('head');
      expect(l.GetHeadPosition()).toEqual(headPos);
    });

    it('should GetTailPosition', function(){
      var l = new KF_List();
      var tailPos = l.AddTail('tail');
      expect(l.GetTailPosition()).toEqual(tailPos);
    });

    it('should GetNext', function(){
      var l = new KF_List();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      expect(l.GetNext(positions[1])).toBe(1);
      expect(positions[1].nodeRef).toBe(positions[2].nodeRef);
    });

    it('should GetPrev', function(){
      var l = new KF_List();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      expect(l.GetPrev(positions[1])).toBe(1);
      expect(positions[1].nodeRef).toBe(positions[0].nodeRef);
    });

    it('should GetAt', function(){
      var l = new KF_List();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      expect(l.GetAt(positions[3])).toBe(3);
    });

    it('should SetAt', function(){
      var l = new KF_List();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      l.SetAt(positions[3], 'foo');
      expect(l.GetAt(positions[3])).toBe('foo');
    });

    it('should Get', function(){
      var l = new KF_List();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      expect(l.Get(1)).toBe(0);
      expect(l.Get(2)).toBe(1);
    });

    it('should AddHead', function(){
      var l = new KF_List();
      l.AddHead('head');
      expect(l.head.data).toBe('head');
    });

    it('should RemoveHead', function(){
      var l = new KF_List();
      l.AddHead('head');
      l.RemoveHead()
      expect(l.GetHead()).toBe(null);
    });

    it('should GetHead', function(){
      var l = new KF_List();
      l.AddHead('head');
      expect(l.GetHead()).toBe('head');
    });

    it('should GetTail', function(){
      var l = new KF_List();
      l.AddTail('tail');
      expect(l.tail.data).toBe('tail');
    });

    describe('sort', function(cmp){
      var n = 5;
      var getSortedData = function(cmp){
        var l = new KF_List();
        var positions = [];
        for (var i = 0; i < n; i++){
          positions.push(l.AddTail(i));
        }
        l.sort(cmp);
        var sortedData = [];
        for (var i = 0; i < n; i++){
          sortedData.push(l.Get(i + 1));
        }
        return sortedData;
      }

      it('should sort with default comparator', function(){
        var sortedData = getSortedData();
        expect(sortedData).toEqual([0,1,2,3,4]);
      });

      it('should sort with given comparator', function(){
        var reverseCmp = function(a, b){
          return ! (a > b);
        }
        var sortedData = getSortedData(reverseCmp);
        expect(sortedData).toEqual([4,3,2,1, 0]);
      });
    });

  });
});
