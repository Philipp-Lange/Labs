const numbers = [];

for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers[i] = randomNumber;
    let additionalText = numbers[i];
    if (i < 9) {
        additionalText += ", ";
    }
    document.getElementById("array").innerHTML += additionalText;
}

let largest = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) largest = numbers[i];
}

document.getElementById("largest").innerHTML += largest;