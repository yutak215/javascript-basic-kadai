let num = Math.floor(Math.random() * 100) + 1;

console.log(num)

if (Number.isInteger(num  / 3) == true && Number.isInteger(num  / 5) == true) {
    console.log('3と5の倍数です');
} else if (Number.isInteger(num  / 3) == true) {
    console.log('3の倍数です');
}  else if (Number.isInteger(num  / 5) == true) {
    console.log('5の倍数です');
} else {
    console.log(num);
}