Apa itu Destructuring Assignment
In JavaScript, destructuring assignment adalah cara untuk mengambil nilai dari array atau object dan menyimpan nilai tersebut ke dalam variabel yang berbeda. Dalam bahasa Inggris, ini disebut dengan "destructuring". Contoh penggunaan destrcturing assignment dibawah:
javascript
const person = { name: 'John', age: 30 };
const {name, age} = person; // nama variable akan otomatis sama dengan key-nya
console.log(name); // John
console.log(age); // 30
// jika ingin memakai alias, bisa dilakukan seperti ini
const {name: firstName, age: currentAge} = person;
console.log(firstName); // John
console.log(currentAge); // 30
// jika ingin memakai default value (jika properti tidak ada), bisa dilakukan seperti in
i
const {name, age = 25} = person;
console.log(name); // John
console.log(age); // 30
// jika ingin memakai nested property, bisa dilakukan seperti ini
const person = { address: { city: 'New York' }};
const {address: {city}} = person;
console.log(city); // New York
// jika ingin memakai rest parameter, bisa dilakukan seperti ini
const [x, ...rest] = [1, 2, 3];
console.log(x); // 1
console.log(rest); // [2, 3]
