const heart = '❤';
console.log(heart.length);

const love = '💘';
console.log(love.length);

let count = 1;
for (let char of love) {
    console.log(char, count);
    count++;
}