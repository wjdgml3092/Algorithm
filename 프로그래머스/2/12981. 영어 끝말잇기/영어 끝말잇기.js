function checkRule(words, idx){
    if(words[idx - 1].charAt(words[idx-1].length -1) !== words[idx].charAt(0)){
            return false
    }
    else if(words.indexOf(words[idx]) !== idx){
        return false
    }
    return true
}

function solution(n, words) {
    var check = true;
    
    let people = 1, turn = 1;
    
    for(let i = 1; i < words.length; i++){
        people ++;
        if( i % n === 0){
            people = 1;
            turn ++;
        }
        
        if(!checkRule(words, i) ){
            check = false
            break;
        }
    }

    return check ? [0,0] : [people,turn]
}