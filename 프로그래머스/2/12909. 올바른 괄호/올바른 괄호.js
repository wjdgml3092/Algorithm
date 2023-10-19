function solution(s){
    let answer = true;
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(s[i])
        }
        else{
            if(stack.length === 0){
                answer = false
                break;
            }
            else{
                stack.pop()
            }
            
        }
    }
    
    return stack.length === 0 && answer ? true : false;
}