const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/3003_test.txt'
const input = fs.readFileSync(filePath).toString().split(' ').map(Number)

const chess = [1, 1, 2, 2, 2, 8]

const result = chess.map((el, idx) => el - input[idx])

console.log(result.join(' '))
