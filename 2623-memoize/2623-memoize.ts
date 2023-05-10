type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const map = new Map()
    
    return function(...args) {
        if (map.has(args.toString())){
            return map.get(args.toString())
        } else {
            const value = fn(...args)
            map.set(args.toString(), value)
            return value
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */