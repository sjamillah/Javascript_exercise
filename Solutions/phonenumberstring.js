'''Gets numbers from 0-9 and makes a phone number string'''
function createPhoneNumber(numbers){
  let str = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`; //slices the first three numbers, the next three with a space between and last four with parantheses between
  return str;
}

module.exports = createPhoneNumber;
