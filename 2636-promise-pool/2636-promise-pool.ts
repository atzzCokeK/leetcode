type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {
    return new Promise((resolve) => {
        let count = 0;
        let functionIndex = 0;
        
        function helper(){
            if(functionIndex >= functions.length){
                if(count === 0) resolve(0)
                return
            }
            
            while(count < n && functionIndex < functions.length){
                count++;
                const promise = functions[functionIndex]()
                functionIndex++
                
                promise.then(() => {
                    count--
                    helper()
                })
            }
        }
        
        helper()
    })
};