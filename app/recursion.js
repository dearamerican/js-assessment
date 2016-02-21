exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var res = [];
    var subFile;
    var recurse = function(f) {
      if(dirName) {
        for(var key in f) {   
          if(f[key] === dirName || subFile) {
            for(var i = 0; i < f['files'].length; i++) {
              if(typeof f['files'][i] === 'string') {
                res.push(f['files'][i]);
              } 
              if(f['files'][i] && typeof f['files'][i] === 'object') {
                subFile = true;
                recurse(f['files'][i]);
              }
            }
            subFile = false;
            return;
          } 
          else if (key === 'dir' && f[key] !== dirName) {
            for(var g = 0; g < f['files'].length; g++) {
              if(f['files'][g] && typeof f['files'][g] === 'object') {
                recurse(f['files'][g]);
              }
            }
          }
        }
      } else {
        for(var key in f) {   
          if (key === 'files') {
            for(var j = 0; j < f[key].length; j++) {
              if(typeof f[key][j] === 'string') {
                res.push(f[key][j]);
              }
              if(f[key][j] && typeof f[key][j] === 'object') {
                recurse(f[key][j]);
              }
            }
          }
        }
      }
    };
    recurse(data);
    return res;
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
