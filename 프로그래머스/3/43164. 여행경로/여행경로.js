function solution(tickets) {
   const answer = [];
    const len = tickets.length + 1;
    const visited = new Array(tickets.length).fill(0)
    
    const dfs = (path) => {
        if (path.length === len) {
            answer.push(path)
        } else {
            for(const i in tickets) {
                if(visited[i] === 0) {
                    const [start, end] = tickets[i];
                    if (path[path.length - 1] === start) {
                        visited[i] = 1;
                        dfs([...path, end]);
                        visited[i] = 0;
                    }
                }
            }
        }
    }
    
    dfs(["ICN"]);
    return answer.sort()[0];
}