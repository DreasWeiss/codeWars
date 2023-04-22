function outed(meet, boss) {
    let totalScore = 0;
    let num = Object.keys(meet).length;

    for (let i in meet) {
        totalScore += meet[i]
    }

    if (meet.hasOwnProperty(boss)) totalScore += meet[boss];

    return totalScore / num > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}


console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'));
// 'Get Out Now!'

console.log(outed({ 'tim': 1, 'jim': 3, 'randy': 9, 'sandy': 6, 'andy': 7, 'katie': 6, 'laura': 9, 'saajid': 9, 'alex': 9, 'john': 9, 'mr': 8 }, 'katie'));
// 'Nice Work Champ!'

console.log(outed({ 'tim': 2, 'jim': 4, 'randy': 0, 'sandy': 5, 'andy': 8, 'katie': 6, 'laura': 2, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 8 }, 'john'));
// 'Get Out Now!'

console.log(outed({ "tim": 7, "jim": 2, "randy": 1, "sandy": 9, "andy": 8, "katie": 0, "laura": 7, "saajid": 6, "alex": 0, "john": 9, "mr": 5 }, "andy"));
// 'Nice Work Champ!'

console.log(outed({ "tim": 5, "jim": 6, "randy": 6, "sandy": 0, "andy": 8, "katie": 4, "laura": 8, "saajid": 0, "alex": 9, "john": 7, "mr": 1 }, "mr"));
// 'Get Out Now!'
