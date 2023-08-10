function solution(phone_number) {
    let hidden =  phone_number.substr(0, phone_number.length-4).replace(/[0-9]/g, '*');
    
    return hidden + phone_number.substr(phone_number.length-4);
}