function* fibGenerator(): Generator<number, any, number> {
    let result = [0,1];

    while(true){
        yield result[0]
        result = [result[1], result[0] + result[1]]
    }
    
};
/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */