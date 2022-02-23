module.exports = function check(str, bracketsConfig) {

  let brackets = bracketsConfig.join('').replace(/,/g, '');
  let neededStack = [];

  for (let bracket of str) {
      let bracketsIndex = brackets.indexOf(bracket);
      if (bracketsIndex % 2 === 0) {
          if (bracket === brackets[bracketsIndex + 1] && neededStack[neededStack.length - 1] === bracketsIndex) {
              neededStack.pop();
          } else if (bracket === brackets[bracketsIndex + 1] && neededStack[neededStack.length - 1] !== bracketsIndex) {
              neededStack.push(bracketsIndex);
          } else {
              neededStack.push(bracketsIndex);
          }
      }  else {
          if (neededStack.pop() !== bracketsIndex-1) {
              return false;
          }
      }
      
  }
  return neededStack.length === 0;
}