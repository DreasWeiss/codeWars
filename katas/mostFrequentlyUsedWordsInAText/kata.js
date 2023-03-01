function topThreeWords(text) {
    let regex = ".*[a-zA-Z].*";
    if (text.match(regex)) {
        let wMap = new Map();
        text.split(' ').forEach(w => {
            if (w) {
                w = w.toLowerCase();
                if (wMap.has(w)) {
                    let count = wMap.get(w);
                    count++;
                    wMap.set(w, count);
                } else {
                    wMap.set(w, 1);
                }
            }
        });

        const sortedWMap = new Map([...wMap.entries()].sort((a, b) => b[1] - a[1]));

        let res = Array.from(sortedWMap.keys()).filter((w, i) => i < 3);
        res = res.map(r => {
            r = r.replace(/[/.,]/g, '');
            if (r !== '') {
                return r;
            }
        });
        return res.filter(r => r !== undefined);
    } else {
        return [];
    }
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); //, ['e','d','a'])

console.log(topThreeWords("a a c b b")); //, ['a','b','c'])

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // ,['e','ddd','aa'])

console.log(topThreeWords("  //wont won't won't ")); //, ["won't", "wont"])

console.log(topThreeWords("  , e   .. ")); //, ["e"])

console.log(topThreeWords("  ...  ")); //, [])

console.log(topThreeWords("  '  ")); //, [])

console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`)); //, ['a','of','on'])