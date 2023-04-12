class TimeLimitedCache {
    private store : Map<number, {value: number, expiredTime: number}>

    constructor() {
        this.store = new Map()
    }

    set(key: number, value: number, duration: number): boolean {
        const now = Date.now()
        const isExisting = this.store.has(key) && (this.store.get(key).expiredTime > now)
        this.store.set(key,{value,expiredTime: now + duration})
        
        return isExisting
    }

    get(key: number): number {
        const now = Date.now()
        if(!this.store.has(key) || this.store.get(key).expiredTime < now ){
            return -1
        }
        
        return this.store.get(key).value
    }

	count(): number {
        let count = 0
        const now = Date.now()
        
        this.store.forEach((value,key) => {
            if(value.expiredTime > now){
                count++
            }
        })
        return count
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */