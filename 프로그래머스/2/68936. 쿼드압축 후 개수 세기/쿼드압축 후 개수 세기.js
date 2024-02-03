function solution(arr) {
    var answer = [0,0];
    
    function quadTree(x,y,n){
        let same = true
        
        for(let i = x; i < x+n; i++){
            for(let j = y; j < y+n; j++){
                if(arr[i][j] !== arr[x][y]){
                    same = false
                    break;
                }
            }
        }
    
        if(same) return answer[arr[x][y]]++
        else{
            quadTree(x, y, n/2)
            quadTree(x+n/2, y, n/2)
            quadTree(x, y+n/2, n/2)
            quadTree(x+n/2, y+n/2, n/2)
        }

    }
    
    quadTree(0,0,arr.length)
    
    
    return answer;
}