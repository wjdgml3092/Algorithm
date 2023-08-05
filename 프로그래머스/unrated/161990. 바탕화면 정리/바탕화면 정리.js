function solution(wallpaper) {
    var answer = [];
    
    let lux = 51, luy = 51;
    let rdx = 0, rdy = 0;
    
    wallpaper.forEach((item, idx) => {
        if(item.includes('#')){
            rdx = idx
            let fileIdx = item.indexOf('#')
            let lastIdx = item.lastIndexOf('#')
        
            if(luy > fileIdx){
                luy = fileIdx
                if(lux > idx){    
                    lux = idx
                }
            }
            
            if(rdy < lastIdx) {
                rdy = lastIdx
            }
        }
    })
    return [lux, luy, rdx+1, rdy+1];
}