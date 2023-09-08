const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/1406_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

const lstack = input[0].split('') //문자열 배열에 넣기
const rstack = []

for (let i = 2; i <= Number(input[1]) + 1; i++) {
  const command = input[i].split(' ')

  switch (command[0]) {
    case 'L': //왼쪽 커서 옮기기
      if (lstack.length !== 0) {
        rstack.push(lstack.pop())
      }
      break
    case 'D': //오른쪽 커서 옮기기
      if (rstack.length !== 0) {
        lstack.push(rstack.pop())
      }
      break
    case 'B': //커서 왼쪽에 문자 삭제
      if (lstack.length !== 0) {
        lstack.pop()
      }
      break
    case 'P': //커서 왼쪽에 문자 추가
      lstack.push(command[1])
      break
  }
}

console.log(lstack.concat(rstack.reverse()).join(''))
