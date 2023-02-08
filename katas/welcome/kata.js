const db = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
};

const err = {
    IP_ADDRESS_INVALID: 'not a valid ipv4 or ipv6 ip address',
    IP_ADDRESS_NOT_FOUND: 'ip address not in the database',
    IP_ADDRESS_REQUIRED: 'no ip address was supplied'
};

function greet(language) {
    if (db[language]) {
        return db[language];
    }

    if (err[language]) {
        return db.english;
    }
}



console.log(greet('english'));
console.log(greet('dutch'));
console.log(greet('IP_ADDRESS_NOT_FOUND'));