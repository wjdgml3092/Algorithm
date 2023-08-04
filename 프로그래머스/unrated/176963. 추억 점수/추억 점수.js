function solution(name, yearning, photo) {
    var answer = [];

    photo.forEach(item => {
        let count = 0;
        item.forEach(person => {
            const idx = name.indexOf(person);
            if(idx !== -1){
               count += yearning[idx];   
            }
        })
        
        answer.push(count)
    })

    return answer;
}