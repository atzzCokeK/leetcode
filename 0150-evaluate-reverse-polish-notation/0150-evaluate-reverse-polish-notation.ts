function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    for (const token of tokens) {
        if (!Number.isNaN(parseInt(token))){
            stack.push(parseInt(token))
        } else {
            const right = stack.pop()
            const left = stack.pop()

            switch (token) {
                case "+":
                    stack.push(left + right)
                    break;
                case "*":
                    stack.push(left * right)
                    break;
                case "/":
                    stack.push(Math.trunc(left / right))
                    break;
                case "-":
                    stack.push(left - right)
                    break;
            }
        }
    }

    return stack[0]
};