let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
})

Promise.all([promise1, promise2, promise3]).then(function (values) {
  console.log(values)
})

let names = ['fred', 'barney', 'wilma']

const promises = names.map(async name => {
  return new Promise(async (resolve, reject) => {
    await setTimeout(resolve, 100, name)
  })
})

console.log(promises)

let all = Promise.all(promises).then(values => {
  console.log('All done: ', values)
})

console.log(all)
