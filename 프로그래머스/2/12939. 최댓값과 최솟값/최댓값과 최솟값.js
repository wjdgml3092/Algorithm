function solution(s) {
    
    let min = Infinity, max = -Infinity;
    
    s.split(" ").forEach((item) => {
        const number = Number(item)
        
        max = Math.max(max, number)
        min = Math.min(min, number)
    });
    
    return `${min} ${max}`;
}