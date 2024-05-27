function solution(food) {
    let stack = []
    
    food.slice(1).forEach((item) => {
        stack.push(parseInt(item/2))
    })
    
    let answer = ""
    stack.forEach((item,idx) => {
        for(let i = item; i > 0; i--){
            answer += idx+1
        }
    })
    
    return answer + '0' + [...answer].reverse().join('');
}