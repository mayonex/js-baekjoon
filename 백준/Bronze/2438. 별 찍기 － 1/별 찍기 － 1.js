function solution(input) {
  const N = parseInt(input[0]);
  const result = [];
  for (let i = 0; i < N; i++) {
    let answer = "";
    for (let j = 0; j <= i; j++) {
      answer += "*";
    }
    result.push(answer);
  }
  console.log(result.join("\n"));
}

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().split(" ");
solution(input);
