function solution(array, commands) {
    var answer = [];
 
    
    for(let i = 0; i<commands.length; i++){
        let sliceArr = array.slice(commands[i][0]-1,commands[i][1])
        sliceArr = sliceArr.sort(function(a, b)  {
            if(a > b) return 1;
            if(a === b) return 0;
            if(a < b) return -1;
        })
        
        
        answer.push(sliceArr[commands[i][2]-1])
    }
    
    return answer;
}