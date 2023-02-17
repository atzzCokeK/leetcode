function findCenter(edges: number[][]): number {
    const pc1 = edges[0][0]
    const pc2 = edges[0][1]

    if (pc1 === edges[1][0] || pc1 === edges[1][1]){
        return pc1
    }

    return pc2

};