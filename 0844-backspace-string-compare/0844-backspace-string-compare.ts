function backspaceCompare(s: string, t: string): boolean {
    const convert = (src: string) => {
        const arr = new Array()
        for(let i =0; i < src.length; i++){
            if(src.charAt(i) !== "#"){
                arr.push(src.charAt(i))
            } else {
                arr.pop()
            }
        }
        return arr
    }

    return convert(s).toString() === convert(t).toString()
} 
