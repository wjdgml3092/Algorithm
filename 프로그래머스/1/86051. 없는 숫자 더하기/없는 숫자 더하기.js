function solution(numbers) {
    const sum = numbers.reduce((a,c) => a+=c, 0)
    
    return 45 - sum;
}