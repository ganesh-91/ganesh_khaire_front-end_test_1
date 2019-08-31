
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z', 'y']


// function for getting number for char
const computeSum = function (char) {
    const charIndex = arr.indexOf(char);
    if (char === 'a') {
        return 1;
    } else {
        return (computeSum(arr[charIndex - 1]) * 2 + arr.indexOf(char) + 1);
    }
}

// function for getting sum from string
function parseString(string) {
    
    var funcArr = [];
    string.split('').map((char) => {
        funcArr.push(computeSum(char))
    });
    
    Promise.all(funcArr)
        .then((...result) => {
            console.log(result)
        });
}

// function for getting char from number
const findChar = function (number) {
    arr.forEach((elm) => {
        if (computeSum(elm) === number) {
            console.log(elm);
        }
    })
}


// // function for getting sum from string
// const parseString = function (string) {
// string.split('').map((char) => {
//     console.log(computeSum(char));
// });
// }



