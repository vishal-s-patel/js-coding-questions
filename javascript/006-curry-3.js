function sum(a, b, c, d) {
  return a + b + c + d;
}

function curry(cb) {
  let params = [];
  temp = function (...args) {
    params.push(...args);
    if (params.length < cb.length) {
      return temp;
    } else {
      const copyParams = [...params];
      params = [];
      return cb(...copyParams);
    }
  };
  return temp;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(10)(2, 3)(4, 5));
console.log(curriedSum(1)(2)(3)(4));
