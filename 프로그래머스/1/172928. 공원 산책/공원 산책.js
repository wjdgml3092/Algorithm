function solution(park, routes) {
    const w = park.length
    const h = park[0].length
    const start = []
    
    for(let i = 0; i < w; i++){
        for(let j = 0; j < h; j++){
            if(park[i][j] === 'S')
                start.push(j,i)
        }
    }
    
    let [x,y] = start
     
    function isCheck(direction, dx, dy){
        if(dx < 0 || dy >= w || dx >= h || dy < 0)
            return
    
        let isMove = true
     
        if(direction === 'N'){
            for(let i = y; i >= dy; i--){
                for(let j = x; j <= dx; j++){
                    if(park[i][j] === 'X'){
                        isMove = false
                        break;
                    }
                }
            }
        }
        else if(direction === 'W'){
             for(let i = y; i <= dy; i++){
                  for(let j = x; j >= dx; j--){
                    if(park[i][j] === 'X'){
                        isMove = false
                        break;
                    }
                }
             }
        }
        else {
            for(let i = y; i <= dy; i++){
                for(let j = x; j <= dx; j++){
                    if(park[i][j] === 'X'){
                        isMove = false
                        break;
                    }
                }
            }
        }
                
        if(isMove){
            x = dx
            y = dy
        }
    }
    
    routes.forEach(item => {
        const [direction, cnt] = item.replace(' ','').split('')
        const numCnt = Number(cnt)
        
        switch(direction){
            case 'N':
                isCheck('N', x, y-numCnt)
                break;
            case 'S':
                isCheck('S', x, y+numCnt)
                break;
            case 'W':
                isCheck('W', x-numCnt, y)
                break;
            case 'E':
                isCheck('E', x+numCnt, y)
                break;
        }
    })
    
    return [y,x];
}