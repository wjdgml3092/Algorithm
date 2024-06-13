const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/10808_test.txt'
const input = fs.readFileSync(filePath).toString().split('')

let arr = new Array(26).fill(0)

input.forEach((item) => {
  const ch = item.charCodeAt()
  arr[ch - 97] += 1
})

console.log(arr.join(' '))
