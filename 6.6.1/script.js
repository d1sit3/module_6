// пример 1

const palindrome = 'Довод'.toLowerCase();
if (palindrome.toString().split("").reverse().join("") == palindrome.toString()) {
    console.log("Слово",palindrome , "является палиндромом");
} else {
    console.log("Слово",palindrome , "не является палиндромом");
}

// пример 2

const palindrome1 = 'Сантимент'.toLowerCase();
if (palindrome1.toString().split("").reverse().join("") == palindrome1.toString()) {
    console.log("Слово",palindrome1 , "является палиндромом");
} else {
    console.log("Слово",palindrome1 , "не является палиндромом");
}