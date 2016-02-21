exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {

  },

  permute: function(arr) {

    var recurse = function() {

    };

  },

  fibonacci: function(n) {
    if(n <= 2) {
      return 1;
    } 
    return exports.recursionAnswers.fibonacci(n-1) + exports.recursionAnswers.fibonacci(n-2);
  },

  validParentheses: function(n) {

  }
};
