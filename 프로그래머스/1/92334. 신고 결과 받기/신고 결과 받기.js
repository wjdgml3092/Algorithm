function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0) 
    
    const arr = new Map()
    const newReport = [...new Set(report)] //중복제거
    
    newReport.forEach((item) => {
        const [reporter, reported] = item.split(' ') //신고한 사람, 신고당한사람
        
        if(arr.has(reported)){ //신고당한사람이 map에 있는가
            const fineReported = arr.get(reported)
            const temp = fineReported.reporter
            temp.push(reporter) //신고한사람들 reporter배열에 추가
            arr.set(reported, { 
                reporter:temp, 
                cnt: ++fineReported.cnt
            })
        }
        else{ //map 객체에 없는 상태니 초기 set
            arr.set(reported, {reporter: [reporter], cnt: 1})
        }
    })
    
    arr.forEach((item) => {
         if(item.cnt >= k){ //k보다 크거나 같다면
           for(const i of item.reporter){ //reporter 즉, 신고한 사람들 배열을 돌아서
               const idx = id_list.indexOf(i)
               answer[idx] += 1 //answer에 +1
           }
       }
    })
    
    return answer;
}