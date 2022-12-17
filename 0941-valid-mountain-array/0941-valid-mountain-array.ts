function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) return false
    let i = 0
    let increase = false
    let decrease = false
    
    while(arr[i] < arr[i + 1]){
        increase = true
        i++
    }
    
    while(arr[i] > arr[i + 1]){
        decrease = true
        i++
    }
    console.log(i)
    
    return i === arr.length - 1 && increase && decrease
};