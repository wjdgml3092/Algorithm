function solution(a, b) {
    var answer = 0;
    
    a.map((item, idx) => {
        answer += item * b[idx]
    })
    
    return answer;
    
    
}