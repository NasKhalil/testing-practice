const stringLength = (string) => {
  let strLength = string.length;
  try {
    if(strLength < 1){
      throw new Error ('does not meet condition: less than 1 caracter');
    }
    if(strLength > 10){
      throw new Error ('does not meet condition: more than 10 caracters');
    }
  }

  finally {
    // return 
  }

  return strLength;
}


module.exports = { stringLength }