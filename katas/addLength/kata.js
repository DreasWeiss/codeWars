function addLength(str) {
    return str.split(' ').map(i => i += ` ${i.length}`);
}


console.log(addLength('you will win'));
// ["you 3", "will 4", "win 3"]
