const sum = (...args) => {
  let storage = [...args];
  if (args.length === 0) return 0;

  temp = function (...args2) {
    storage.push(...args2);
    if (args2.length > 0) {
      return temp;
    } else {
      return storage.reduce((a, b) => a + b, 0);
    }
  };
  return temp;
};

let total = sum(10)(20)(30)(40)();

console.log(total);
