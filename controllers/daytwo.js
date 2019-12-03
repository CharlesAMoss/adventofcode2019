const fs = require('fs');

const title = function() {
    return `Day 2: 1202 Program Alarm`     
}

const intcodePatchProgram = (noun, verb) => {
    
    list = getProgram();
    list[1] = noun;
    list[2] = verb;
    let point = 0;
    while (list[point] !== 99) {
      const [op, numOne, numTwo, store] = list.slice( point, point + 4 ),
        n1 = list[numOne],
        n2 = list[numTwo];
      list[store] = op === 1 ? n1 + n2 : n1 * n2;
      point += 4;
    
    }
  return list[0];
}

const intercodeHarness = () => {
    const target = 19690720;

    for (let i = 0; i < 100; i++ ) {
        for (let j = 0; j < 100; j++ ) {

           const output = intcodePatchProgram(i,j);
           if (output === target) {
               return [i,j]
           }
        }
    }
    return `no match could be found`
}

const getProgram = () => {
    try {  
        const data = fs.readFileSync('./data/daytwo.txt', 'utf8');
        return data.split(',').map(x => parseInt(x))
    } catch(e) {
        console.log('Error:', e.stack);
    }
}

module.exports = { 
    title,
    intcodePatchProgram,
    intercodeHarness
}

  