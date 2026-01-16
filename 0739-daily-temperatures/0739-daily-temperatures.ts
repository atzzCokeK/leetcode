function dailyTemperatures(temperatures: number[]): number[] {
    const ans = Array(temperatures.length).fill(0)
    const stack = []

    for (let i = 0; i < temperatures.length; i++){

        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const top = stack.pop()
            ans[top] = i - top
        }

        stack.push(i)
    }

    return ans
};