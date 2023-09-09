function solution(prices) {
    let len = prices.length
    let answer = new Array(len).fill(0)
    
    for (i = 0; i < len; i++) {
       for (j = i + 1; j < len; j++) {
           answer[i]++;
           if (prices[i] > prices[j])
               break;
       }
   }
    
    return answer
}