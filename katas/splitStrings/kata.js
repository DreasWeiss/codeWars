function solution(str) {
    let answer = [];
    let arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 1) {
            answer.push(`${arr[i]}${arr[i + 1]}`)
            i++;
        } else {
            answer.push(`${arr[i]}_`)
        }
    }

    return answer;
}


console.log(solution("abcdef"));
// ["ab", "cd", "ef"]);


console.log(solution("abcdefg"));
// ["ab", "cd", "ef", "g_"]);


console.log(solution(""));
// []);

