function jump(n, memo){
    if(memo[n]) return memo[n]
    
    if(n === 2) return 2
    if(n === 1) return 1
    
    const res =  (jump(n-1, memo) + jump(n-2, memo)) % 1234567
    memo[n] = res
    return res
}

function solution(n) {
    return jump(n, []);
}