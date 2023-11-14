// Spread Operator

// const mhs = ["Alghi", "Aiman", "Acim"];
// console.log(...mhs[0]); // A, l, g, h, i

// menggabungkan 2 array dengan Spread Operator
// const mhs = ["Alghi", "Aiman", "Acim"];
// const dosen = ["Fitrah", "Gibtha", "Novi"];
// const orang = [...mhs, ...dosen];
// console.log(orang);// gabungan dari array mhs dan dosen

// const orang = mhs.concat(dosen);
// console.log(orang); // hasilnya sama, menggabungkan 2 array mhs dan dosen

// bagaimana ketika ingin menambahkan elment array baru ditengah
// lebih mudah dilakukan dengan spread operator
// const orang = [...mhs, "ucup", ...dosen];
// console.log(orang);

// meng-copy array dengan spread operator
// const mhs = ["Alghi", "Aiman", "Acim"];
// const mhs1 = [...mhs];
// mhs1[0] = "Ahmad";
// console.log(mhs);

// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// console.log(huruf);
// nama.innerHTML = huruf;

// Rest Parameter
// function myFunc(a,...myArgs) {
//   //   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   return myArgs;
// }

// function myFunc() {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   return arguments;
//   return Array.from(arguments);
//   return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
// let total = 0;
// for (const a of angka) {
//   total += a;
// }
// return total;
// higher order
// return angka.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const group1 = ["Alghi", "budi", "caca", "erik"];
// const [ketua, wakil, ...anggota] = group1;
// console.log(`Ketua : ${ketua} , Wakil: ${wakil}, Anggota : ${anggota}`);

//object destructuring
// const team = {
//   pm: 'alghi',
//   frontend1: 'budi',
//   frontend2: 'caca',
//   backend: 'erik'
// };
// const {pm, ...myteam} = team;
// console.log(`PM : ${pm} , My Team : ${Object.values(myteam)}`);

//filtering
function filterBy(type, ...values){
return values.filter(v => typeof v === type);
}
console.log(filterBy('string', 1,2, 'Alghi',false,10,true,'aiman'));

//array spreading
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Algi", age: 27 },
//         { name: "Budi", age: 28 },
//         { name: "Caca", age: 29 },
//         { name: "Erik", age: 30 },
//       ]);
//     }, 2000);
//   });
// }
// getData().then((data) => {
//   data.forEach((d) => {
//     console.log(`Nama : ${d.name}, Umur : ${d.age}`);
//   });
// });
