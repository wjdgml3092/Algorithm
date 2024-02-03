function solution(a) {
    let front = a[0];
    let back = a[a.length-1];
    
    let frontArr = [];
    let backArr = [];
    
    for(let i = 1; i < a.length -1; i++){
        if(a[i] < front){ //앞부터 비교해서 front보다 더 작다면 변경
            front = a[i]
            frontArr.push(a[i])
        }
    }
    
    for(let i = 1; i < a.length-1; i++){
        const curr = a[a.length - i - 1]
        if(curr < back) { //뒤부터 비교해서 back보다 더 작다면 변경
            back = curr
            backArr.push(curr)
        }
    }
    
    //+2: 맨 앞, 맨 뒤
    return [...new Set([...frontArr, ...backArr])].length + 2;
}