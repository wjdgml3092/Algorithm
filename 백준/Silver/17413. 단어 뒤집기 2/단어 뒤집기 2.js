const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/17413_test.txt'
const input = fs.readFileSync(filePath).toString().trim().split('')

let tag = false

let tmp = []
let answer = []

for (let i = 0; i < input.length; i++) {
  if (input[i] == '<') {
    if (tmp.length > 0) {
      answer = answer.concat(tmp)
      tmp = []
    }
    answer.push('<')
    tag = true
  } else if (input[i] == '>') {
    answer.push('>')
    tag = false
  } else {
    if (tag) {
      answer.push(input[i])
    } else {
      if (input[i] == ' ') {
        tmp.push(' ')
        answer = answer.concat(tmp)
        tmp = []
      } else {
        tmp.unshift(input[i])
      }
    }
  }
}

if (!tag) {
  answer = answer.concat(tmp)
}

console.log(answer.join(''))
