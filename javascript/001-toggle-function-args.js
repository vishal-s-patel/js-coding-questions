function toggle(...args) {
  let count = 0;
  return function () {
    if (args.length) {
      console.log(args[count++]);
      if (count >= args.length) count = 0;
    }
  };
}

const hello = toggle("Hello!");
hello(); //"Hello!"
hello(); //"Hello!"

const onOff = toggle("on", "off");
onOff(); //"on"
onOff(); //"off"
onOff(); //"on"

const empty = toggle();
empty();
