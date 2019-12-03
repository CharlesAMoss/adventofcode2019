const fs = require('fs');

const title = function() {
    return `Day 2: 1202 Program Alarm`     
}

const intcodeProgram = (req) => {
    const { patch1, patch2 } = req.body,
        list = getProgram();
    list[1] = patch1;
    list[2] = patch2;
    let head = 0;
    while (list[head] !== 99) {
      const [op, numOne, numTwo, store] = list.slice( head, head+4 ),
        n1 = list[numOne],
        n2 = list[numTwo];
      list[store] = op === 1 ? n1 + n2 : n1 * n2;
      head += 4;
    }
  return list[0];
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
    intcodeProgram
}

  