function solution(players, callings) {
    let playerObj = {};

    for (let i = 0; i < players.length; i++) {
        playerObj[players[i]] = i;
    }

    callings.forEach((item) => {
        const idx = playerObj[item];

        const tmp = players[idx - 1];
        players[idx - 1] = item;
        players[idx] = tmp;

        //객체 인덱스 순서 변경
        console.log(playerObj)
        playerObj[idx]--;
        console.log(playerObj)
        playerObj[players[idx]]++;
    });

  return players;
}