let res;
res = 10 + 20;
res = 20 - 10;
res = 10 * 20;
res = 10 / 20;

// Остаток от деления % 
console.log(10 % 4); // 2
console.log(15 % 8); // 7

// Возведение в степень **
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8


// Квадратный корень
console.log(4 ** (1 / 2)); // 2

// Бинарный плюс
let str = "моя" + " " + "строка";
console.log(str);

let a = 1
let b = "2";
console.log(a + b);
console.log(a / b);


// Унарный + привродит к числу
console.log(a + + b);


let apples = "2";
let orange = "3";

let sam;
sam = apples + orange;
console.log(sam);

sam = apples + orange;
console.log(sam);

// Сокращённая арифметика =+, -=, *=, /=...
let n = 2;
// n = n + 10;
n += 10;
n -= 10;
n *= 2;
n /= 2;
console.log(n);

// Инкремент/декремент

console.log("Инкремент / декремент");
let count = 10;
// count++; // равноценно count = count + 1
console.log(count++);
console.log(count);