'''Gets numbers from 0-9 and makes a phone number string'''
function createPhoneNumber(numbers){
  let str = `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
  return str;
}

module.exports = createPhoneNumber;
