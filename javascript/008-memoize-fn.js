let memoize = (fn) => {
  let map = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (map[key]) return map[key];
    map[key] = fn(...args);
    return map[key];
  };
};

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(callCount); // 1
