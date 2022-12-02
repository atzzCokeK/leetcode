function romanToInt(s: string): number {
    const map = new Map()
    map.set("I",1)
    map.set("V",5)
    map.set("X",10)
    map.set("L",50)
    map.set("C",100)
    map.set("D",500)
    map.set("M",1000)
    map.set("IV",4)
    map.set("IX",9)
    map.set("XL",40)
    map.set("XC",90)
    map.set("CD",400)
    map.set("CM",900)
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++){
        const key = s.slice(i,i+2)
        if(map.get(key)){
            result += map.get(key) 
            i ++
            continue;
        }
        const singleKey = s.slice(i, i+1)
              
        
        result += map.get(singleKey)
    }
    
    return result
    
};