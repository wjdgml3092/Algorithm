const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/10828_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

const stack = []
const answer = []

for (let i = 1; i <= input[0]; i++) {
  const command = input[i].split(' ')

  switch (command[0]) {
    case 'push':
      stack.push(command[1])
      break
    case 'pop':
      answer.push(stack.length === 0 ? -1 : stack.pop())
      break
    case 'top':
      let topIdx = stack[stack.length - 1]
      answer.push(topIdx === undefined ? -1 : topIdx)
      break
    case 'size':
      answer.push(stack.length)
      break
    case 'empty':
      answer.push(stack.length !== 0 ? 0 : 1)
      break
  }
}

console.log(answer.join('\n'))
