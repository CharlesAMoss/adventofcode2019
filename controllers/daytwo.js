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

//console.log(intcodeProgram())

// const chomp = (list) => {
  


//   data.list = list
//   data.output = list
//   data.listLength = list.length 
//   data.opcode = list[0]
//   data.first = list[list[1]]
//   data.second = list[list[2]]
//   data.store = list[3]

//   switch(data.opcode) {
//     case 1:
//       data.output[data.store] = data.first + data.second  
//     break;
//     case 2:
//       data.output[data.store] = data.first * data.second  
//     break;
//     case 99:
//       return data.output  
//     break;

//   }

//   console.log(list)
//   // for (let l of list ) {
      
//   // }


// } 

//chomp(arr)

//console.log(data)
//$('#msg').html( data.output )


  
  