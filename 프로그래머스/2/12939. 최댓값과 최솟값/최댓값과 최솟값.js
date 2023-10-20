function solution(s) {
    let arr = s.split(" ").map((item) => Number(item));
    
    let min = arr[0], max = arr[0];
    
    arr.forEach((item) => {
        max = Math.max(max,item)
        min = Math.min(min,item) 
    })
    
    return `${min} ${max}`;
}