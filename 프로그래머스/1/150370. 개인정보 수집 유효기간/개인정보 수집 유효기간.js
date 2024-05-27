function solution(today, terms, privacies) {
    var answer = [];
    const privateName = [] , period = []
    
    //약관 이름, 유효기간 배열 담기
    terms.forEach(item => {
        const [a,b] = item.split(' ')
        privateName.push(a)
        period.push(b)
    })
    
    privacies.forEach((item,idx) => {
        const [date, private] = item.split(' ') // 날짜, 개인정보 약관 네임
        //개인정보 약관 네임에 해당하는 인덱스 찾아서 기간 가져오기
        const privatePeriod = period[privateName.indexOf(private)] 
        
        //정수 변환, 1달 ~ 100달까지라 년, 달을 더하기 위해 나누고 모둘러
        const y = parseInt(privatePeriod / 12)
        const m = parseInt(privatePeriod % 12)
        
        const [year, month, day ] = date.split('.').map(Number)
        
        let newYear = year+y
        let newMonth = month+m
        let newDay = day - 1 
        
        if(newDay === 0) { //날짜가 0이면 달, 날 세팅
            newMonth -= 1
            newDay = 28
        }
        
        if(newMonth > 12){ //더한 달이 12이상이면 년, 달 세팅
            newYear += 1
            newMonth = newMonth - 12
        }
        else if(newMonth === 0){ // 빼준 달이 0이라면, 년은 줄고 달은 12로
            newYear -= 1
            newMonth = 12
        }
        
        const maxDate = newYear + '.' + String(newMonth).padStart(2, '0') + '.' + String(newDay).padStart(2, '0') //달, 날 xxxx.xx.xx로 포맷 맞춰주기 
        
        if(maxDate < today){
            answer.push(idx+1)
        }
        
    })
    
    return answer;
}