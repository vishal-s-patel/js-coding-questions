const mapping = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

const friends = (mapping, person) => {
  let friendsList = mapping[person];
  if (friendsList) {
    const output = [...friendsList];
    for (const friend of friendsList) {
      output.push(...friends(mapping, friend));
    }
    return output;
  }
  return [];
};

console.log(friends(mapping, "a"));

// Output:
// ["b","c","d","g","p","q"]
