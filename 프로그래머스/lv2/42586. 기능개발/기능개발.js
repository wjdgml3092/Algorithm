function solution(progresses, speeds) {
    let answer = []
        
    tmp = progresses.map((item, idx) => {
        return  Math.ceil((100 - item) / speeds[idx])
        //100에서 남은 잔여량을 구한 후 속도로 나눠서 올려준다.
    })
    
    let cnt = 0;
    let maxDay = tmp[0];
    
    tmp.forEach((item) => {
        if(item <= maxDay){
            cnt++
        }
        else{
            maxDay = item;
            answer.push(cnt)
            cnt = 1
        }
    })

  answer.push(cnt);
  return answer;
}