exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    function countIt () {
      console.log(start++);

      if(start <= end) {
        timeout = setTimeout(countIt, 100);
      }
    }

    countIt();

    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
