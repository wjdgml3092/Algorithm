function solution(absolutes, signs) {
    return absolutes.reduce((a,c,idx) => signs[idx] ? a += c : a -= c,0);
}