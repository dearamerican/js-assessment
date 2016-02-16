exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  var count = {};
  var res = '';
  var donezo = [];
  for(var i = 0; i < str.length; i++) {
    count[str[i]] = count[str[i]] + 1 || 1;
  }
  
  for(var j = 0; j < str.length; j ++) {
      var counter = 0;
      if(count[str[j]] === 1) {
        res += str[j];  
      } else {
        while(counter < amount && !_.contains(donezo, str[j])) {
            res += str[j];
            counter++;
        }
        donezo.push(str[j]);
      }
  }
  return res;
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
