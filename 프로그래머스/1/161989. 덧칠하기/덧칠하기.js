function solution(n, m, section) {
    var answer = 0;

    let wallArr = new Array(n).fill(true); 
    
    section.forEach((e, i) => {
        wallArr[e-1] = false; 
    })
   
    section.forEach((e, i) => {
        let count = 0;

        if(wallArr[e-1] == false) {
            for(let i = 0; i < m; i++) {
                wallArr[e - 1 + i] = true;
            }
            answer += 1;
        }
    })

    return answer;
}