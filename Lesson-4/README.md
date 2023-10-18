### apa itu Higher Order Fucntion?

- Higher order function adalah sebuah fungsi yang mengambil fungsi lainnya sebagai argumen atau menyimpan fungsi dalam variabel. Dalam JavaScript, higher order functions dapat digunakan untuk memroses data dan melakukan operasi pada data tersebut dengan cara membacanya atau mengubahnya dan juga dapat diberikan kembali hasilnya ke fungsi lainnya.

### Apa perbedaan antara Function Declaration dan Expression?

- function declaration adalah sebuah deklarasi yang menggunakan kata kunci "function", sedangkan
- function expression adalah sebuah ekspresi yang tidak memiliki kata kunci "function".

### Contoh dari Function Declaration vs Expression?

Contoh Function Declaration:
javascript
function myFunc() {}
myFunc();
Contoh Function Expression:
javascript
let myFunc = () => {};
myFunc();

### Mengenal Arrow Functions, Kapan Harus Digunakannya?

Arrow functions adalah fungsi baru di ES6 yang menyederhanakan sintaks untuk definisi fungsi dengan cara pen
gunaan arrow syntax. Namun, arrow functions hanya bisa digunakan dalam beberapa situasi tertentu
dalam JavaScript yaitu pada parameter ataupun property method.

### Contoh Penerapan Arrow Functions

javascript
let arr = [23,45,78];
arr.map(item => item \* 2); //[46,90,156]
arr.filter(item => item > 45);//[45,78]

### Membuat Function dengan Parameter Default

Parameter default dapat ditetapkan saat pemanggilan fungsi jika argumennya belum tersedia. Dengan
cara ini maka nilai argument akan dipilih apabila argumen tidak ada.
javascript
function sayHelloToUser(name='Anonymous') {
console.log(`Hello ${name}`);
}
sayHelloToUser('John'); // Hello John
sayHelloToUser(); // Hello Anonymous

### Cara Mendefinisikan Object Literal Lebih Cepat

Cara lain untuk memecah object literal adalah dengan memberikan nama propertinya kepada variabel. Ingat
bagaimana cara membaca data dari objek tersebut.
javascript
let obj = {
name:'John',
age:30,
city:'New York'
};
obj.name; //John
obj.age; //30
obj.city; // New York

### Cara Untuk Merubah Value Property Objek

Untuk merubah value property objek, cukup gunakan operator assignment. Misalnya, jika ingin
merubah value dari property `name` ke `Jane`, maka kita harus mengambil property tersebut l
alu melakukan assignment.
javascript
obj.name = 'Jane';
console.log(obj.name); // Jane

### Cara Untuk Memastikan Properti Objek Ada/Tidak Ada

Cara untuk memastikan bahwa suatu properti objek ada/tidak ada adalah dengan
menggunakan opertor in-operator (`in`) dan hasOwnProperty().
javascript
if ('name' in obj) {
console.log("The 'name' property exists.");
} else {
console.log("The 'name' property does not exist.");
}

### filter, map & reduce

Filter digunakan untuk menyaring array yang berisi element-element yang tidak sesuai syarat
dengan mengelompokkan element-element yang sesuai syarat ke dalam satu array baru. Contoh di bawah ini adalah contoh penerapan filter pada array `[1, 2, 3,4, 5]`.
javascript
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter((value) => value > 2);
console.log(filteredArr); // [3, 4, 5]

Map digunakan untuk mengganti setiap elemen array dengan nilai yang telah disediakan
oleh fungsi callback. Contoh di bawah ini adalah contoh penerapan map pada array `[1, 2, 3, 4, 5]`.
javascript
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map((value) => value \* 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]

Reduce digunakan untuk mengurangi sebuah array menjadi satu nilai. Fungsi callback akan dipanggil pada setiap elemen array dan nilainya akan dimasukkan ke parameter acumulator.
Contoh di bawah ini adalah contoh penerapan reduce pada array `[1, 2, 3, 4, 5]`.
javascript
const arr = [1, 2, 3, 4, 5];
const reducedValue = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reducedValue); // 15
