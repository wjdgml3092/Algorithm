function solution(s) {
    const en = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const ko = [0,1,2,3,4,5,6,7,8,9]
    
    for(let i = 0; i < 10; i++){
        s = s.replaceAll(en[i],ko[i])
    }
    
    return Number(s);
}