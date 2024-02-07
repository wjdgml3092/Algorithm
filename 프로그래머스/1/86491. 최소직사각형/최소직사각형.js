function solution(sizes) {
    let maxRow = []
    let maxCol = []
    
    for(const i in sizes){
        sizes[i].sort((a,b) => b - a)
        maxRow.push(sizes[i][0])
        maxCol.push(sizes[i][1])
    }
   
    return Math.max(...maxRow) * Math.max(...maxCol);
}