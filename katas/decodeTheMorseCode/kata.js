decodeMorse = function (morseCode) {

    return morseCode.trim()
        .split('  ')
        .map(i => {
            return i.split(' ')
                .map(z => z = MORSE_CODE[z])
                .join('')
        }).join(' ');
}




console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
// 'HEY JUDE'


console.log(decodeMorse('   .... . -.--   '));
// 'HEY'