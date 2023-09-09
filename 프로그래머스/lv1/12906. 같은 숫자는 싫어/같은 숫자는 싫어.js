function solution(arr)
{
    var answer = [];
    
    arr.map((item, idx)=>{
        if(idx === 0 || item !== arr[idx-1])    {
            answer.push(item)
        }
    })
    
    return answer;
}