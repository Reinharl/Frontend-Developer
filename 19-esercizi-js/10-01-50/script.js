let seconds = Number(prompt("insert seconds: "));

let hours = Math.trunc(seconds / 3600);
console.log("hours: " + hours);

seconds = seconds - hours * 3600;

let minutes = Math.trunc(seconds / 60);
console.log("minutes: " + minutes);

seconds = seconds - minutes * 60;

console.log("seconds: " + seconds);