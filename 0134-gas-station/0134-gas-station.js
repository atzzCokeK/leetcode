/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let total_tank = 0;
    let curr_tank = 0;
    let startingP = 0;

    for (let i = 0; i < n; i++){
        total_tank = total_tank + gas[i] - cost[i];
        curr_tank = curr_tank + gas[i] - cost[i];

        if(curr_tank < 0){
            startingP = i + 1;
            curr_tank = 0;
        }

    }

    return total_tank >= 0 ? startingP : -1;
};