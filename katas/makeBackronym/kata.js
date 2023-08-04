//preload variable: dict

let dict = {
    "P": 'perfect',
    "D": 'disturbing',
    'M': 'mustache',
    'G': 'gregarious'
}

var makeBackronym = function (string) {
    //your code here
    return string.split('')
        .map(i => dict[i.toUpperCase()])
        .join(' ');
};


console.log(makeBackronym('dmg'));
// 'disturbing gregarious mustache'