function solution(name, yearning, photo) {
    var answer = [];

    photo.map((arr, idx1) => {
        let result = 0
        arr.map((item) => {
            name.map((people, idx3) => {
                if(item === people){
                    result += yearning[idx3]
                } 
            })
        })
        answer.push(result)
    })
    
    
    return answer;
}