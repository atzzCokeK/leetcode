function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    if (image[sr][sc] == color) return image

    const rowLimit = image.length
    const columnLimit = image[0].length
    const stack = []
    const original = image[sr][sc]

    stack.push([sr,sc])

    while(stack.length !== 0){
        const current = stack.pop()
        const row = current[0]
        const column = current[1]

        if (image[row][column] == original) {
            image[row][column] = color
        }

        if (row - 1 >= 0 && image[row - 1][column] == original){
            image[row - 1][column] = color 
            stack.push([row - 1,column])
        }
        
        if (row + 1 < rowLimit && image[row + 1][column] == original){
            image[row + 1][column] = color 
            stack.push([row + 1, column])
        }

        if (column - 1 >= 0 && image[row][column - 1] == original){
            image[row][column - 1] = color 
            stack.push([row, column - 1])
        }

        if (column + 1 < columnLimit && image[row][column + 1] == original){
            image[row][column + 1] = color
            stack.push([row, column + 1])
        }
    }
    
    return image

};