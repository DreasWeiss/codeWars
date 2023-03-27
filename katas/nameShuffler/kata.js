function nameShuffler(str) {
    return [str.split(' ')[1], str.split(' ')[0]].join(' ');
}


console.log(nameShuffler('john McClane')); //'McClane john');
console.log(nameShuffler('Mary jeggins')); //'jeggins Mary')
console.log(nameShuffler('tom jerry')); //'jerry tom')