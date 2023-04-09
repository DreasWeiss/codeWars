function removeParentheses(s) {
    let c = 0
    let res = ""
    for (let i of s) {
        if (i == "(")
            c += 1
        else if (i == ")")
            c -= 1
        else {
            if (c == 0)
                res += i
        }
    }
    return res
}


console.log(removeParentheses("example(unwanted thing)example"));
// "exampleexample"


console.log(removeParentheses("example (unwanted thing) example"));
// "example  example"


console.log(removeParentheses("a (bc d)e"));
// "a e"


console.log(removeParentheses("a(b(c))"));
// "a"


console.log(removeParentheses("hello example (words(more words) here) something"));
// "hello example  something"


console.log(removeParentheses("(first group) (second group) (third group)"));
// "  "

