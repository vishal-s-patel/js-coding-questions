var getType = function (value) {
  if (Array.isArray(value)) {
    return value.map(getType);
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = getType(value[key]);
      return acc;
    }, {});
  } else {
    return typeof value;
  }
};

const obj = {
  name: "vishal",
  address: {
    line1: "surat",
    pincode: 395006,
  },
  members: [
    {
      name: "mem1",
      conntact: 999,
    },
  ],
};

console.log(getType(obj));
