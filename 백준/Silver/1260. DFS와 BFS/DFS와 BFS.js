const fs = require('fs')
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './backjoon/1260_test.txt'
const input = fs.readFileSync(filePath).toString().split('\n')

let [n, m, v] = input[0].split(' ').map(Number)

let graph = new Array(n + 1)

for (let i = 0; i < graph.length; i++) {
  graph[i] = []
}

for (let i = 0; i < m; i++) {
  const [from, to] = input[i + 1].split(' ')

  graph[from].push(to)
  graph[to].push(from) //양방향
}

graph.forEach((el) => {
  el.sort((a, b) => a - b)
})

let visited = new Array(n + 1).fill(0)
let dfs_answer = []
function dfs(v) {
  if (visited[v] === 1) return
  visited[v] = 1

  for (let i = 0; i < graph[v].length; i++) {
    if (!visited[graph[v][i]]) {
      dfs_answer.push(graph[v][i])
      dfs(graph[v][i])
    }
  }
}

dfs(v)
dfs_answer.unshift(v)
console.log(dfs_answer.join(' '))

let bfs_answer = []
visited.fill(0)

function bfs(v) {
  let queue = [v]

  while (queue.length) {
    let x = queue.shift()
    if (visited[x] === 1) {
      continue
    }
    visited[x] = 1
    bfs_answer.push(x)

    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i]
      if (visited[next] === 0) {
        queue.push(next)
      }
    }
  }
}

bfs(v)
console.log(bfs_answer.join(' '))
