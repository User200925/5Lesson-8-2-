// Исходный массив слов
let words = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];

// Массив для слов с буквой "н"
let wordsWithN = [];

// Массив для слов без буквы "н"
let wordsWithoutN = [];

// Распределение элементов массива
words.forEach(function(word) {
    if (word.includes("н") || word.includes("Н")) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
});

// Вывод массивов
console.log("Слова с буквой 'н':", wordsWithN);
console.log("Слова без буквы 'н':", wordsWithoutN);
