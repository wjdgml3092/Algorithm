function solution(arr)
{
    let answer = []
   
    arr.forEach((item, idx) => {
        if(idx === 0 || arr[idx-1] !== item){
            answer.push(item)
        }
    })
    
    return answer;
}