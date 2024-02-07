function solution(maps) {
    let answer = 1;
    
    //위, 오른쪽, 아래, 왼쪽
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    
    let n = maps.length; //x
    let m = maps[0].length; //y
    
    let queue = []
    let visited = maps
    
    visited[0][0] = 1
    queue.push([0,0])
 
    while(queue.length){
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
            let [x, y] = queue.shift();
            
            for(let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {

                    // 목적지 도착 시 리턴
                    if(nx == n-1 && ny == m-1) {
                        return answer+1;
                    }

                    queue.push([nx, ny]);
                    
                    visited[nx][ny] = 0;
                }
            }
        }
        answer += 1; 
    }
    
    return -1;
}