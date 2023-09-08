const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/9012_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

for (let i = 1; i <= input[0]; i++) {
  const cases = input[i]
  const stack = []
  let result = 'YES'

  for (let j = 0; j < cases.length; j += 1) {
    if (cases[j] === '(') {
      stack.push(1)
    } else {
      if (!stack.pop()) {
        result = 'NO'
        break
      }
    }
  }

  if (stack.length !== 0) {
    result = 'NO'
  }

  console.log(result)
}
