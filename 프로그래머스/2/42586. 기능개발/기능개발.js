function solution(progresses, speeds) {
    let answer = []
    
    const working = progresses.map((item,idx)=> Math.ceil((100-item)/speeds[idx]))
    
    let cnt = 0;
    let deployDay = working[0]
        
    working.forEach((item) => {
        if(item <= deployDay){
            cnt++
        }
        else{
            deployDay = item;
            answer.push(cnt)
            cnt = 1
        }
    })

    answer.push(cnt);
    return answer;
}