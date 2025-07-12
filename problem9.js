//Prime number

let n = 23;
let num = 0;
if (n < 2) {
    console.log("The given is number " + n + " is not prime")
};
for (let i = 1; i <= n; i++) {
    if (n % 2 == 0)
        num += 1;
}
if (num > 2) {
    console.log("The given is number " + n + " is not prime");
} else {
    console.log("The given is number " + n + " is prime");
}