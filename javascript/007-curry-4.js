function add(...args) {
  let storage = args;
  function helper(...args2) {
    storage.push(...args2);
    return helper;
  }
  helper.valueOf = () => storage.reduce((acc, cur) => acc + cur, 0);
  helper.value = helper.valueOf;
  return helper;
}

console.log(add(1, 2, 3).value() === 6);
console.log(add(1, 2)(3).value() === 6);
console.log(add(1)(2)(3).value() === 6);
console.log(add(1)(2) + 3);
