function solution(d, budget) {
    let answer = 0
    d.sort((a,b) => a - b)
    
    d.reduce((a,c,idx,arr) => {
        answer++
        
        if(a+c > budget){ //예산보다 더 크다면
            answer-- // 하나빼주고
            // reduce의 반복조건을 범위 밖으로 설정해서 종료(굳이 돌 필요가 없다고 생각함)
            arr.splice(1) 
        } 
        
        return a += c
    }, 0);
    
    return answer
}