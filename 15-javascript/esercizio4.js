let number, random;

do {
    number = prompt("Pensa a un numero da 1 a 10: ");
    random = Math.floor(Math.random() * 10) + 1;
} while (number != random)

console.log("Ho vinto hai pensato a " + random);