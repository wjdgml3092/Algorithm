function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0)
    
    const arr = new Map()
    const newReport = [...new Set(report)] //중복제거
    
    newReport.forEach((item) => {
        const [reporter, reported] = item.split(' ')
        
        if(arr.has(reported)){
            const fineReported = arr.get(reported)
            const temp = fineReported.reporter
            temp.push(reporter)
            arr.set(reported, { 
                reporter:temp, 
                cnt: ++fineReported.cnt
            })
        }
        else{
            arr.set(reported, {reporter: [reporter], cnt: 1})
        }
    })
    
    arr.forEach((item) => {
         if(item.cnt >= k){
           for(const i of item.reporter){
               const idx = id_list.indexOf(i)
               answer[idx] += 1
           }
       }
    })
    
    return answer;
}