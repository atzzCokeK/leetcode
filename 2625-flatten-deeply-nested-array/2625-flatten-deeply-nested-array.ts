type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    if(n === 0){
        return arr
    }
    const result = []
    
    const traverse = (array, n) => {
        for(let i in array){
            if(n > 0 && Array.isArray(array[i])){
                traverse(array[i],n-1)
            } else{
                result.push(array[i])
            }
        }
        
    }
    
    traverse(arr,n)
    
    return result
};