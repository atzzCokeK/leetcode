/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const map = new Map()
    let counter = 0

    for(let i = 0; i < tasks.length; i++){
        if (map.has(tasks[i])){
            map.set(tasks[i], map.get(tasks[i]) + 1)
        } else{
            map.set(tasks[i], 1)
        }
    }

    map.forEach((v,k) => {
        if (v === 1){
            counter = -1
        }
    })

    if (counter === -1){
        return counter
    } else {
        counter = 0
    }

    map.forEach((v,k) => {
        if (v % 3 === 0){
            counter = counter + Math.floor(v / 3)
            return
        }

        if (v % 3 === 1){
            counter += Math.floor(v / 3) + 1
            return
        }

        if (v % 3 === 2){
            counter += Math.floor(v / 3) + 1
            return
        }
        
    })

    return counter
};