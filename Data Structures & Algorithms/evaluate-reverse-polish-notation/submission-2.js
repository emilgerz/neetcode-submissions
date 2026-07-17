class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operands = []

        const evaluate = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => a / b 
        }

        const OPERATORS = new Set(Object.getOwnPropertyNames(evaluate))

        for (const symb of tokens) {
            console.log(operands)
            if (OPERATORS.has(symb)) {
                const second = operands.pop()
                const first = operands.pop()

                const res = evaluate[symb](first, second)

                operands.push(Math.trunc(res))
            } else {
                operands.push(Number(symb))
            }
        }

        console.log(operands)


        return operands[0]
    }
}
