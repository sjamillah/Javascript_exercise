'''script to count the number of vowels in a string'''
function getCount(str) {
  let count = 0; //initializes the count to zero
  for (let char of str.toLowerCase()) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') //checks if each character of the string in lowercase is strictly equal to a vowel
	  {
      count++; //makes an increment once the character is equal to a vowel
    }
  }
  return count; //returns the total number of vowels in the string
}

module.exports = getCount;
