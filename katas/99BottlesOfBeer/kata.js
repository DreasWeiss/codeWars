var sing = function () {
    let song = [];
    for (let i = 99; i >= 1; i--) {
        if (i === 1) {
            song.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`);
            song.push(`Take one down and pass it around, no more bottles of beer on the wall.`);
            song.push(`No more bottles of beer on the wall, no more bottles of beer.`);
            song.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
        } else if (i === 2) {
            song.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
            song.push(`Take one down and pass it around, ${i - 1} bottle of beer on the wall.`);
        } else {
            song.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
            song.push(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
        }
    }
    return song;
};
sing();