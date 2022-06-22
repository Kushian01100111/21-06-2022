// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.
function high(x){
    let to = "abcdefghijklmnopqrstuvwxyz"
    let numbers = []
    let letter = []
    
    
    let string = x.split(" ");
    string.forEach(n =>{
      let tooo = n.split("");
      let number = 0;
      tooo.forEach((x,index) =>{
        if(index === (tooo.length - 1)){
            number += to.indexOf(x)+1
          numbers.push(number)
            letter.push(n)
           }else{
             number += to.indexOf(x)+1
           }
      })
    })
    
 let math = Math.max(...numbers.map(n => n))
 let result = letter[numbers.findIndex(n => n === math)]

  return result
  }

  high("oqbjekqnrjxib kmrlqvabewpof fbspazvvlqxfk pngjmientnxtg")