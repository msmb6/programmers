data = "3 2";

const n = data.split(" ");
const a = Number(n[0]);
const b = Number(n[1]);
let stars = "";
for (let i = 0; i < b; i++) {
  for (let j = 0; j < a; j++) {
    stars += "*";
  }
  stars += "\n";
}
console.log(a);
console.log(b);
console.log(stars);
