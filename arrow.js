function doubleIt(num){
    return num*2
}
console.log(doubleIt(5));

const double = num => num*2;
console.log(double(50));
const add = (x,y) => x+y;
console.log(add(50,70));
const giveFive = () => 5;
console.log(giveFive())
const big = (x,y) => {
    const sum = x+y;
    const difference = x-y;
    const result = sum*difference;
    return result
}
console.log(big(5,10));