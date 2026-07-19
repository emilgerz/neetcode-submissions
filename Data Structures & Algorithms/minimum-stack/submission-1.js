class MinStack {
    #store = []
    
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const minVal = this.getMin()
        
        this.#store.push({val, minVal: minVal !== null ? Math.min(minVal, val) : val})
    }

    /**
     * @return {void}
     */
    pop() {
        this.#store.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.#store.at(-1).val
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.#store.length === 0) {
            return null
        }
        
        return this.#store.at(-1).minVal
    }
}
