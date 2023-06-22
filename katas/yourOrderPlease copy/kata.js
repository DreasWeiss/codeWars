function peopleWithAgeDrink(old) {
    return old < 14 ? 'drink toddy' :
        old < 18 ? 'drink coke' :
            old < 21 ? 'drink beer' :
                'drink whisky';
};


console.log(peopleWithAgeDrink(22)); // 'drink whisky'