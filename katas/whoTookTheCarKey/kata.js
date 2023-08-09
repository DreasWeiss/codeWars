function whoTookTheCarKey(message) {
    return message.map(i => String.fromCharCode(parseInt(i, 2))).join('')
}


console.log(whoTookTheCarKey(['01000001', '01101100', '01100101', '01111000', '01100001', '01101110', '01100100', '01100101', '01110010']));
// 'Alexander'