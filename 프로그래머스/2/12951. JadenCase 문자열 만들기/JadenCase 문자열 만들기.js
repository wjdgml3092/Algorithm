function solution(s) {
    const arr = s.split(' ');
    
     let answer = arr.map(item=> item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());

    
    return answer.join(' ');
}