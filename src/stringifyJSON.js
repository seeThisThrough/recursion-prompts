// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// input: JS method/function
// output: the JS method in string form

  //console.log(JSON.stringify({ x: 5, y: 6 }));
  // expected output: "{"x":5,"y":6}"



var stringifyJSON = function(obj){
    //boolean, null and numbers
      //we want to add '' on the outside of number value
    if( typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
      return '' + obj
    }
    //string
      //we want to add '' on the outside && change inside quotes to ""
    if( typeof obj === 'string') {
      return '"' + obj + '"'
    }
    if(Array.isArray(obj) && obj) {
        var resultArr = [];
      for (var i = 0; i < obj.length; i++) {
        resultArr.push(stringifyJSON(obj[i]));
      }
      return '[' + resultArr + ']'
      }

    if(typeof obj === 'object' && obj) {
      var resultObj = [];
      for(var key in obj) {
        if(obj[key] === undefined || typeof obj[key] === 'function'){
          continue;
        }
        resultObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
      return '{' + resultObj.join(',') + '}';
    }
};




