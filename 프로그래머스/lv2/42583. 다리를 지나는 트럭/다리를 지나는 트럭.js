function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
  
    let bridge =  new Array(bridge_length).fill(0);
    let bridge_sum = 0;
    

    //첫번째 트럭 올리기
    answer++;
    bridge.shift();
    bridge_sum += truck_weights[0];
    bridge.push(truck_weights.shift());
  
    // 대기 트럭 배열이 남아있거나 다리 위에 올라간 트럭 배열이 남아있는 동안,
    while (bridge_sum > 0) {
      answer++;
      
      bridge_sum -= bridge.shift();
      
      // 다리 하중이 다음 트럭의 무게를 더해도 다리가 버틸 수 있다면
      if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
          // 다음 트럭 넣기
          bridge_sum += truck_weights[0];
          bridge.push(truck_weights.shift());
        } else {
          bridge.push(0);
      }
  }
  
  return answer;

}