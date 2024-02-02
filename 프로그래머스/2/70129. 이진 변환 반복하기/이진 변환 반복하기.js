function solution(s) {
    let zeroCnt = 0;
    let repeatCnt = 0;
    
    while(s !== '1'){
        
        let str =''
        s = s.split('');

        s.forEach(item => {
            if(item == '1') {
                str += item;
            } else if(item == '0') {
                zeroCnt += 1;
            }
        })

        s = String((str.length).toString(2));

        repeatCnt +=1
    }
   
    return [repeatCnt, zeroCnt];
}