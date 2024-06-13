const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/2577_test.txt'
const [n1, n2, n3] = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map(Number)

const arr = new Array(10).fill(0)
const multi = (n1 * n2 * n3).toString()

multi.split('').reduce((a, c) => {
  a[c] += 1
  return a
}, arr)

console.log(arr.join('\n'))
