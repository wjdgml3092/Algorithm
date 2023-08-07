function solution(players, callings) {
    const hash = new Map();
    
    players.forEach((name, index) => {
        hash.set(name, index);
    })
    
    callings.forEach(item => {
        const idx = hash.get(item);

        const tmp = players[idx -1];
        players[idx -1] = players[idx];
        players[idx] = tmp;
        
        hash.set(item, hash.get(item) - 1);
        hash.set(tmp, hash.get(item) + 1);
    })
    
    return players;
}