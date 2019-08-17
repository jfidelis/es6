const numbers = [1,2,3,4];
console.log(numbers.filter(n => n > 3));
console.log(numbers.reduce((acum, curr) => acum + curr, 10));
console.log(numbers.find( n => n == 3));

const [a, b, c, d, e = 0] = numbers;
console.log(a);console.log(b);console.log(c);console.log(d);console.log(e);

const [g, h, ...i] = numbers; // ...i: isso é todo o resto
console.log(g,h,i);

const [j, , k] = numbers;
console.log(j,k);

const otherNumbers = [10,20,numbers];
console.log(otherNumbers);

const otherNumbers2 = [10,20, ...numbers];
console.log(otherNumbers2);

const otherNumbers3 = [10,20, ...numbers, 30];
console.log(otherNumbers3);

const s = new Set(); // Não permite valores duplicados
s.add(1).add(2).add(3).add(1);
console.log(s);

console.log(s.has(2)); // Sera que temos 2?
console.log(s.has(200)); // Sera que temos 200?
s.delete(2);
console.log(s.has(2)); // Sera que temos 2?

const m = new Map(); // Set chave valor lembra dictionarys
m.set(1,'maria');
console.log(m);

