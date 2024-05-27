function solution(a, b, n) {
    var answer = 0;
    
    while(n >= a){
        const divide = parseInt(n/a)
        const mod = parseInt(n%a)
        
        n = divide * b + mod
        
        answer += divide * b
    }
    
    return answer
}