define(
  [
    'guido/misc/Class'
],
function(
  Class
){
  describe('Class', function(){
    it('should be defined', function(){
      expect(Class).toBeDefined();
    });

    it('should allow basic extension', function(){
      var Person = Class.extend({
        init: function(isDancing){
          this.dancing = isDancing;
        },
        dance: function(){
          return this.dancing;
        }
      });

      var p = new Person(true);
      expect(p.dance()).toBe(true);
    });

    it('should allow the use of super class methods', function(){
      var Person = Class.extend({
        init: function(isDancing){
          this.dancing = isDancing;
        },
        dance: function(){
          return this.dancing;
        }
      });

      var Ninja = Person.extend({
        init: function(){
          this._super( false );
        },
        dance: function(){
          // Call the inherited version of dance()
          return this._super();
        },
        swingSword: function(){
          return true;
        }
      });

      var n = new Ninja();
      expect(n.dance()).toBe(false);
      expect(n.swingSword()).toBe(true);
    });

    it('should correctly reflect inheritance for instanceof', function(){
      var Person = Class.extend({
        init: function(isDancing){
          this.dancing = isDancing;
        },
        dance: function(){
          return this.dancing;
        }
      });

      var Ninja = Person.extend({
        init: function(){
          this._super( false );
        },
        dance: function(){
          // Call the inherited version of dance()
          return this._super();
        },
        swingSword: function(){
          return true;
        }
      });

      var p = new Person(true);
      var n = new Ninja();

      expect(p instanceof Person).toBe(true);
      expect(p instanceof Class).toBe(true);
      expect(n instanceof Ninja).toBe(true);
      expect(n instanceof Person).toBe(true);
      expect(n instanceof Class).toBe(true);
    });
  });

});
