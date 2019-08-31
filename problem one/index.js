
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z', 'y']

var computeSum = function (char) {
    console.log()
    // return { computeSum }
    var charIndex = arr.indexOf(char);
    if (char === 'a') {
        return 1;
    } else {
        return (computeSum(arr[charIndex - 1]) * 2 + arr.indexOf(char) + 1);
    }
}