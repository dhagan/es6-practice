var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);

// find
var found = array1.find(element => {
  return element === 9;
});

console.log(found);

// concat
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));


// iterator
var iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);

// keys
var iterator = array1.keys();

for (let key of iterator) {
  console.log(key); // expected output: 0 1 2
}