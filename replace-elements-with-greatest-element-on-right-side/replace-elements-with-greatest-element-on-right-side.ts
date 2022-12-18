function replaceElements(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++){
        let max = arr[i + 1];
        for (let index = i + 2; index < arr.length; index++ ){
            max = Math.max(max, arr[index])
        }
        arr[i] = max
    }
    arr[arr.length - 1] = -1
    
    return arr
};