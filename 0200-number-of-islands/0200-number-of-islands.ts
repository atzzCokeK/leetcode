function numIslands(grid: string[][]): number {
    const que = []
    let count = 0
    const rowLimit = grid.length
    const columnLimit = grid[0].length

    for (let row = 0, column = 0; row < rowLimit && column < columnLimit; column++){
    if (grid[row][column] == "1"){ 
        count += 1
        grid[row][column] = "0"
        que.push([row,column])
        
        while (que.length > 0){
            const current = que.pop()
            const cRow = current[0]
            const cColumn = current[1]
            if (cRow - 1 >= 0 && grid[cRow - 1][cColumn] == "1"){
                que.push([cRow - 1, cColumn])
                grid[cRow - 1][cColumn] = "0"
            }
            
            if (cRow + 1 < rowLimit && grid[cRow + 1][cColumn] == "1"){
                que.push([cRow + 1, cColumn])
                grid[cRow + 1][cColumn] = "0"
            }
            
            if (cColumn - 1 >= 0 && grid[cRow][cColumn - 1] == "1"){
                que.push([cRow, cColumn - 1])
                grid[cRow][cColumn - 1] = "0"
            }
            
            if (cColumn + 1 < columnLimit && grid[cRow][cColumn + 1] == "1"){
                que.push([cRow, cColumn + 1])
                grid[cRow][cColumn + 1] = "0"
            }
        }
    }
        if (column === columnLimit - 1){
            row += 1
            column = -1
        }
    }

    return count
};