function pyramid(n){
    //your code here
    let result = '';
    let counter = 0;
    for (let i = 1; i <= n; i++) {
        result += `${' '.repeat(n-i)}${'/'}${i<n ? ' '.repeat(counter) : '_'.repeat(counter)}${'\\'}\n`
        result.trimEnd();
        counter+=2
    }
    return n != 0 ? result : '\n';
}


console.log(pyramid(0));

console.log(pyramid(1)); 
// "/\\\n");

console.log(pyramid(2)); 
// " /\\\n/__\\\n");

console.log(pyramid(4)); 
// "   /\\\n  /  \\\n /    \\\n/______\\\n");

console.log(pyramid(6)); 
// "     /\\\n    /  \\\n   /    \\\n  /      \\\n /        \\\n/__________\\\n");

console.log(pyramid(10)); 
//"         /\\\n        /  \\\n       /    \\\n      /      \\\n     /        \\\n    /          \\\n   /            \\\n  /              \\\n /                \\\n/__________________\\\n");
