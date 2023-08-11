function sayHello(name, city, state) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}


console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
// 'Hello, John Smith! Welcome to Phoenix, Arizona!'

console.log(sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'));
// 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'

console.log(sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York'));
// 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'