function solution(s) {
    var answer = '';
    const arr = s.split(' ')
    
    arr.forEach((item,idx) => {
        answer += item.split('').reduce((a,c, idx) => {
            a += idx % 2 === 0 ? c.toUpperCase() : c.toLowerCase()
            return a 
        }, '')
        if(idx !== arr.length -1 ) answer += ' '
    })
    return answer;
}