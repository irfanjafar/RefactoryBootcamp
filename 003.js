var a = Math.max(1,2,3,4,5,6,7,8,9,10,15,20,30,40,60,80,100);
console.log(a);

var b = Math.min(1,2,3,4,5,6,7,8,9,10,15,20,30,40,60,80,100);
console.log(b);

function arrayAverage(arr){
    var sum = 0;
    for(var i in arr) {
        sum += arr[i];
    }
    var numbersCnt = arr.length;
    return (sum / numbersCnt);
}

var average = arrayAverage([1,2,3,4,5,6,7,8,9,10,15,20,30,40,60,80,100]);
console.log(average);