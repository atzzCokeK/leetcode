function checkIfExist(arr: number[]): boolean {
    const map = new Map()
    for(let i = 0; i < arr.length; i++){
        map.set(arr[i],i)
    }
    
    for(let i = 0; i < arr.length; i++){
        const target = arr[i] / 2
        if (map.has(target) && map.get(target) !== i){
            return true
        }
    }
    return false
};