function evalRPN(tokens: string[]): number {
    const ops = new Set(["+", "-", "/", "*"])
    const stack = []

    for (const token of tokens){
        if (!ops.has(token)){
            stack.push(Number(token))
            continue
        } 

        const right = stack.pop()!
        const left = stack.pop()!

        switch (token) {
            case "+": stack.push(left + right); break;
            case "-": stack.push(left - right); break;
            case "*": stack.push(left * right); break;
            case "/": stack.push(Math.trunc(left / right)); break;
        }
    }

    return stack.pop()!
};