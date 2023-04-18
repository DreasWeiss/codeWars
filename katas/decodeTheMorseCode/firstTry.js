const morseAZ19 = {
    'A': ".-",
    'B': "-...",
    'C': "-.-.",
    'D': "-..",
    'E': ".",
    'F': ".._.",
    'G': "--.",
    'H': "....",
    'I': "..",
    'J': ".---",
    'K': "-.-",
    'L': ".-..",
    'M': "--",
    'N': "-.",
    'O': "---",
    'P': ".--.",
    'Q': "--.-",
    'R': ".-.",
    'S': "...",
    'T': "-",
    'U': "..-",
    'V': "...-",
    'W': ".--",
    'X': "-..-",
    'Y': "-.--",
    'Z': "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    " ": "/",
    "!": "-.-.--",
    ".": ".-.-.-",
    ",": "--..--",
    "SOS": "...---..."
};


decodeMorse = function (morseCode) {
    const decMorseAZ10 = new Object();
    Object.entries(morseAZ19).map(
        ([key, value]) => decMorseAZ10[value] = key
    );

    return morseCode.trim()
        .split('  ')
        .map(i => {
            return i.split(' ')
                .map(z => z = decMorseAZ10[z])
                .join('')
        }).join(' ');
}



console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// 'HEY JUDE'


console.log(decodeMorse('   .... . -.--   '));
// 'HEY'
console.log(decodeMorse('...---...'));
// 'SOS'
console.log(decodeMorse('"      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "'));
// 'SOS'