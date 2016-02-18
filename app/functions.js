exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction : function(str) {
    var stringCombiner = function(otherStr) {
      return str + ', ' + otherStr;
    };
    return stringCombiner;
  },

  makeClosures : function(arr, fn) {
    var funcArr = [];
    var genFunc = function(num) {
      return function() {
        return fn(num);
      };
    };
    for(var i = 0; i < arr.length; i++) {
      funcArr.push(genFunc(arr[i]));
    }
    return funcArr;
  },

  partial : function(fn, str1, str2) {
      var genFunc = function(x, y) {
        return function(nextCallVar) {
          return fn.call(null, x, y, nextCallVar);        
        };
      };
      return genFunc(str1, str2);
  },

  useArguments : function() {
    if(arguments.length === 1) {
      return arguments[0];
    } else {
      var total = 0;
      for(var i = 0; i < arguments.length; i++) {
        total += arguments[i];
      }
      return total;
    }
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null, args);
  },

// function schonfinkelize(fn) {
//      var stored_args = Array.prototype.slice.call(arguments, 1);
//      return function () {
//         var new_args = slice.call(arguments),
//               args = stored_args.concat(new_args);
//         return fn.apply(null, args);
//      };
// }
  partialUsingArguments : function(fn) {
    var storedArgs = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var newArgs = Array.prototype.slice.call(arguments);
      var hellaArgs = storedArgs.concat(newArgs);
      return fn.apply(null, hellaArgs);        
    };
  },

  curryIt : function(fn) {

  }
};
