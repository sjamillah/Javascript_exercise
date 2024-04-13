'''Script to convert a number to string and make a sqr root of each digit'''
function squareDigits(num){
  let numstr = num.toString().split(''); //changes num to string and splits it
  let sqr = numstr.map(digit => parseInt(digit, 10) ** 2); //makes each digit and int and squares it
  let result = parseInt(sqr.join(''), 10); //joins the sqr of each digit and makes one int number
  return result;
}
