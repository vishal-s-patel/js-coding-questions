const sampler = function (fn, n) {
  let count = 1;
  return function (...args) {
    if (count === n) {
      count = 1;
      fn.apply(this, args);
    } else {
      count++;
    }
  };
};

function message(...args) {
  console.log("hello", args);
}

const sample = sampler(message, 4);
sample(1);
sample(2);
sample(3);
sample(4);
sample(5);
sample(6);
sample(7);
sample(8);
