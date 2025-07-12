let num = 1234;
let sum = 0;

while(num!=0){
    sum += num % 10;
    num = num / 10;   
}
console.log("Sum of digits : " + sum);
