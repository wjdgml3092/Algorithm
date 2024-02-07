function solution(s){
    let answer = true
    let stack = [];
   
    s.split('').forEach((item) => {
        if(item === '('){
            stack.push(item)
        }
        else{
            if(stack.length === 0){
                answer = false
                return false
            }
            stack.pop()
        }
    })
    
   return stack.length === 0 && answer ? true : false
}