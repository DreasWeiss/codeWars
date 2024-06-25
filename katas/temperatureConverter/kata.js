const tempCelsius = {
    from: {
        'F': (f) => (f - 32)*5/9,
        'K': (k) => k-273.15,
        'R': (r) => (r-491.67)*5/9,
        'De':(de) => 100-de*2/3,
        'N': (n) => n*100/33,
        'Re': (re) => re*5/4,
        'Ro': (ro) => (ro-7.5)*40/21,

    },
    to: {
        'F':(c) => c*9/5+32,
        'K':(c) => c+273.15,
        'R':(c)=> (c+273.15)*9/5,
        'De':(c)=> (100-c)*3/2,
        'N':(c)=> c*33/100,
        'Re':(c)=> c*4/5,
        'Ro':(c)=> c*21/40+7.5,
    }
}

console.log(tempCelsius.to.F(500));
console.log(tempCelsius.to.K(500));
console.log(tempCelsius.to.R(500));
console.log(tempCelsius.to.De(500));
console.log(tempCelsius.to.N(500));
console.log(tempCelsius.to.Re(500));
console.log(tempCelsius.to.Ro(500));

console.log(tempCelsius.from.F(932));
console.log(tempCelsius.from.K(773.15));
console.log(tempCelsius.from.R(1391.67));
console.log(tempCelsius.from.De(-600));
console.log(tempCelsius.from.N(165.00));
console.log(tempCelsius.from.Re(400));
console.log(tempCelsius.from.Ro(270));


function convertTemp(temp, from_scale, to_scale){
// "C"  for Celsius
// "F"  for Fahrenheit
// "K"  for Kelvin
// "R"  for Rankine
// "De" for Delisle
// "N"  for Newton
// "Re" for Réaumur
// "Ro" for Rømer
return from_scale == 'C' ? Math.round(tempCelsius.to[to_scale](temp)) : 
        to_scale === 'C' ? Math.round(tempCelsius.from[from_scale](temp)) :
        Math.round(tempCelsius.to[to_scale](tempCelsius.from[from_scale](temp)))
}

console.log(convertTemp(-30, "De", "K")); // 393
console.log(convertTemp(40, "Re", "C")); // 50
console.log(convertTemp(60, "De", "F")); // 140
console.log(convertTemp(666, "K", "K")); // 66
console.log(convertTemp(393, "K", "De")); // -30
console.log(convertTemp(50, "C", "Re")); // 40
console.log(convertTemp(140, "F", "De")); // 60