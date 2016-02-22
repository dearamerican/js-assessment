exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject) {
      window.setTimeout(
        function() {
          resolve(value);
        }, Math.random()*2000 + 1000);
    });

  },

  manipulateRemoteData : function(url) {
    var arr = [];
    return $.ajax({
      method: 'GET',
      url: url
    }).then(function(resp) {
      resp.people.forEach(function(person) {
        arr.push(person.name);
      });
      return arr.sort();
    });
  }

};