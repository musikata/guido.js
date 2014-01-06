define(
  [
    'guido/misc/KF_IList'
],
function(
  KF_IList
){
  describe('KF_IList', function(){
    it('should be defined', function(){
      expect(KF_IList).toBeDefined();
    });

    it('should construct via KF_IList()', function(){
      var l = new KF_IList();
      expect(l instanceof KF_IList).toBe(true);
    });

    it('should construct via KF_IList(bool ownsElements)', function(){
      var l = new KF_IList(true);
      expect(l instanceof KF_IList).toBe(true);
      expect(l.getOwnership()).toBe(true);
    });

    it('should construct via KF_IList(KF_Ilist list, bool ownsElements)', function(){
      var l = new KF_IList();
      l.AddHead('head');
      var l2 = new KF_IList(l, true);
      expect(l2 instanceof KF_IList).toBe(true);
      expect(l2.GetHead()).toBe('head');
    });

    it('should GetElementPos', function(){
      var l = new KF_IList();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      expect(l.GetElementPos(3)).toEqual(positions[3]);
      expect(l.GetElementPos(999).nodeRef).not.toBeTruthy();
    });

    it('should RemoveAll', function(){
      var l = new KF_IList();
      for (var i = 0; i < 5; i++){
        l.AddHead(i);
      }
      l.RemoveAll();
      expect(l.head).toBe(null);
      expect(l.tail).toBe(null);
      expect(l.count).toBe(0);
    });

    it('should RemoveElement', function(){
      var l = new KF_IList(true);
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      l.RemoveElement(3);
      expect(positions[2].nodeRef.next.data).toBe(4);
      expect(l.count).toBe(4);
    });

    it('should RemoveElementAt', function(){
      var l = new KF_IList(true);
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      l.RemoveElementAt(positions[3]);
      expect(positions[2].nodeRef.next.data).toBe(4);
      expect(l.count).toBe(4);
    });

    it('should DumpListAtTail', function(){
      var l1 = new KF_IList();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l1.AddHead(i));
      }

      var l2 = new KF_IList();
      l1.DumpListAtTail(l2);

      expect(l1.count).toBe(5);
    });

    describe('Cut', function(){
      it('should Cut to node', function(){
        var l = new KF_IList();
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
        var l = new KF_IList();
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

    it('should getCopy', function(){
      var l = new KF_IList(true);
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      var l2 = l.getCopy();
      expect(l2.count).toBe(5);
      expect(l2.GetHead()).toBe(0);
      expect(l2.GetTail()).toBe(4);
    });

    it('should getOwnership', function(){
      var l = new KF_IList(true);
      expect(l.getOwnership()).toBe(true);
    });

    it('should setOwnership', function(){
      var l = new KF_IList(true);
      l.setOwnership(false);
      expect(l.getOwnership()).toBe(false);
      l.setOwnership(true);
      expect(l.getOwnership()).toBe(true);
    });

    it('should AddSortedHead', function(){
      var l = new KF_IList();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      l.AddSortedHead(2.5);
      expect(positions[2].nodeRef.next.data).toBe(2.5);
      expect(positions[3].nodeRef.prev.data).toBe(2.5);
    });

    it('should AddSortedTail', function(){
      var l = new KF_IList();
      var positions = [];
      for (var i = 0; i < 5; i++){
        positions.push(l.AddTail(i));
      }
      l.AddSortedTail(2.5);
      expect(positions[2].nodeRef.next.data).toBe(2.5);
      expect(positions[3].nodeRef.prev.data).toBe(2.5);
    });

  });
});
