let isValid = function(s) {

    let stack = new Stack();

    for (let character of s) {
        if (character === '(' || character === '{' || character === '['){
            stack.push(character);
        } else if (!stack.isEmpty && character === ')' && stack.peek() === '(') {
            stack.pop;
        } else if (!stack.isEmpty && character === '}' && stack.peek() === '{') {
            stack.pop;
        } else if (!stack.isEmpty && character === ']' && stack.peek() === '[') {
            stack.pop;
        } else {
            return false;
        }
    }
    //this will return true if stack is empty (why we are popping)
    return stack.isEmpty
}


class Stack {
    constructor() {
        this.top = 0;
        this.data = {}
    }

    // #insert element into top of stack
    push(val) { 
        this.data[this.top] = val
        this.top++;
    }

    //Length
    getLength() {
        return this.top
    }

    pop() {
        if (this.top === 0) {
            return undefined;
        }

        this.top--;
        let result = this.data[this.top];
        delete this.data[this.top];
        return result;
    }

    // get the top element of the stack
    peak() {
        return this.data[this.top - 1];
    }

    isEmpty() {
        return this.top === 0;
    }
}