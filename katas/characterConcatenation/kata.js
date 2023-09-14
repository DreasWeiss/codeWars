function charConcat(string) {
    let l = Math.trunc(string.length / 2);
    let a = [...string.slice(0, l)]
    let b = [...string.length % 2 === 0 ? string.slice(l) : string.slice(l + 1)].reverse();

    return a.map((i, idx) => i + b[idx] + (idx + 1)).join('');
}


console.log(charConcat("abc def"));
//'af1be2cd3'
//"Should work for example test");

console.log(charConcat("CodeWars"));
//'Cs1or2da3eW4'
//"Should work for 'CodeWars'");

console.log(charConcat('CodeWars Rocks'));
//Cs1ok2dc3eo4WR5a 6rs7