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

  },

  useArguments : function() {

  },

  callIt : function(fn) {
    return fn();
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
