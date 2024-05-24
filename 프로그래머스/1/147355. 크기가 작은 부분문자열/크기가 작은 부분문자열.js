function solution(t, p) {
    var answer = 0;
    let idx = 0
    
    while(idx <= t.length - p.length){
        const sub = t.substr(idx, p.length)
        
        if(sub <= p){
            answer ++
        }
        idx++
    }
    
    return answer
}