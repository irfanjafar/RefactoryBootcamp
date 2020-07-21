function faktorial(num) {
  if(num === 1){
    return 1;
  }
  return num * faktorial(num - 1);
}
console.log(faktorial(10));