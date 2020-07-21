function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

var average = palindrome("Cigar? Toss it in a can. It is so tragic");
console.log(average);

var average = palindrome("I did, did I?");
console.log(average);

var average = palindrome("Red rum, sir, is murder");
console.log(average);

var average = palindrome("Eva, can I see bees in a cave?");
console.log(average);

var average = palindrome("Hello World");
console.log(average);


