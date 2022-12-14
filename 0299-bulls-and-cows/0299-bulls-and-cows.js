/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const map = new Map()
    for(let i = 0; i < secret.length; i++){
        if (map.has(secret.charAt(i))){
            map.get(secret.charAt(i)).push(i)
        } else {
            map.set(secret.charAt(i),[i])
        }
    }

    let bulls = 0
    let cows = 0
    const bullsMap = new Map()
    const cowsMap = new Map()
    let substractedGuess = ""
    
    for(let i = 0; i < guess.length; i++){
        if(map.has(guess.charAt(i))){
            const char = guess.charAt(i)
            const arr = map.get(char)
            if(arr.includes(i)){
                bulls ++;
                bullsMap.set(char, bullsMap.get(char) ? bullsMap.get(char) + 1 : 1);
            }
        }
    }

    for (let i = 0; i < guess.length; i++){
        if(map.has(guess.charAt(i))){
        const char = guess.charAt(i)
        const arr = map.get(char)
        if (!arr.includes(i) && arr.length - (bullsMap.get(char) || 0) - (cowsMap.get(char) || 0) > 0){
            console.log(i)
            cows ++
            cowsMap.set(char, cowsMap.get(char) ? cowsMap.get(char) + 1 : 1);
        }
    }
    }


    
    return `${bulls}A${cows}B`
    
    
    
};