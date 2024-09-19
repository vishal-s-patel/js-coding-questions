class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const list1 = new Node(10);
const list2 = new Node(20);
const list3 = new Node(30);

list1.next = list2;
list2.next = list3;
list3.next = list1;

const removeCycle = function(list) {
  let map = new WeakMap();
  let curr = list;
  while(curr && curr.next) {
    if (map.has(curr)) {
      curr.next.next = null;
    } else {
      map.set(curr.next, curr);
    }
    curr = curr.next;
  }
  return list;
}

console.log(JSON.stringify(removeCycle(list1)));
