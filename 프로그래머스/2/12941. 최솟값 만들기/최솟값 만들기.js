function solution(A,B){
    var answer = 0;

    const minA = A.sort((a,b) => a-b)
    const maxB = B.sort((a,b) => b-a)
    
    for(let i = 0; i < minA.length; i++){
        answer += minA[i] * maxB[i]
    }
    
    return answer;
}