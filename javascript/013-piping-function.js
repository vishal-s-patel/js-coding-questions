const obj = {
  a : {
    b : (a,b,c) => a+b+c,
    c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c
}

function pipingFunction(obj) {
  const helper = (...args) => {
    function ex(o) {
      for(const key in o) {
        if (typeof o[key] === 'object') {
          ex(o[key]);
        } else {
          o[key] = o[key](...args)
        }
      }
      return o;
    }
    return ex(obj)
  }
  return helper;
}

console.log(pipingFunction(obj)(1,1,1));
