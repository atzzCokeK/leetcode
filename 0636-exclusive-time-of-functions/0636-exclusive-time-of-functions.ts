function exclusiveTime(n: number, logs: string[]): number[] {
    const ans = Array(n).fill(0)
    const stack = []
    let prev = 0

    for (const log of logs) {
        const [idStr, action, timeStr] = log.split(":")
        const id = Number(idStr)
        const time = Number(timeStr)

        if (action === "start") {
            const top = stack[stack.length - 1]
            ans[top] = ans[top] + time - prev
            stack.push(id)
            prev = time
        } else {
            const ended = stack.pop()
            ans[ended] = ans[ended] + (time - prev + 1)
            prev = time + 1
        }
    }

    return ans
};