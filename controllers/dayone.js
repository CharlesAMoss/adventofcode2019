const fs = require('fs');

const title = () =>  {
    return `Day 1: The Tyranny of the Rocket Equation`     
}

const fuelCounter = int => {
    return Math.floor(int/3) - 2 
}

const fuelTotal = () => {
    let list = getFuelMassModules();

    return list
               .map(x => fuelCounter(x))
               .reduce((a,b) => a + b)
}

const getFuelMassModules = () => {
    try {  
        const data = fs.readFileSync('./data/dayone.txt', 'utf8');
        return data.split('\r\n').map(x => parseInt(x))
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

module.exports = { 
    title,
    fuelTotal  
}