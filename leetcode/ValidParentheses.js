var isValid = function (s) {
    if (s.length % 2 !== 0) return false; 
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        switch (c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }

    return stack.length === 0;
};

console.log(isValid('()'))