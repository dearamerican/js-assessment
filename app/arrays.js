exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    arrCopy = arr.slice();
    for(var i = 0; i < arrCopy.length; i++) {
      if(arrCopy[i] === item){
        arrCopy.splice(i, 1);
      } 
    }
    return arrCopy;
  },

  removeWithoutCopy : function(arr, item) {
    var length;

    for (var i = 0, length = arr.length; i < length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        length = length - 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var total = 0;
    for(var i = 0; i < arr.length; i ++) {
      if(arr[i] === item) {
        total += 1;
      }
    }
    return total;
  },

  duplicates : function(arr) {
    var countObj = {};
    var dups = [];
    for(var i = 0; i < arr.length; i++) {
      countObj[arr[i]] = countObj[arr[i]] +1 || 1;
    }
    for(var key in countObj) {
      if (countObj[key] > 1) {
        dups.push(Number(key));
      }
    }
    return dups;
  },

  square : function(arr) {
    var sqArr = [];
    for(var i = 0; i < arr.length; i++) {
      sqArr.push(arr[i] * arr[i]);
    }
    return sqArr;
  },

  findAllOccurrences : function(arr, target) {
    var occurences = [];
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurences.push(i);
      }
    }
    return occurences;
  }
};
