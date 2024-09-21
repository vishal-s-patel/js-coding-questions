function get(obj, path) {
  path = path.replaceAll("[", ".");
  path = path.replaceAll("]", "");
  const pathArr = path.split(".").filter(Boolean);
  let val = obj;
  for (const el of pathArr) {
    val = val[el];
    if (val === undefined) {
      return undefined;
    }
  }
  return val;
}

console.log(get({ developer: "Software Engineer" }, "developer")); // => 'Software Engineer'
console.log(
  get(
    { developer: { firstName: "Tom", lastName: "Cruz" } },
    "developer.lastName"
  )
); //=>'Cruz
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]")); //=>0
console.log(get([{ developer: "Tom" }, [0, null]], "[1][1]")); //=>null
