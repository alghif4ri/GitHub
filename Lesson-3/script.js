// function declaration
// function tampilHalo(nama) {
//   console.log(`haloo aku ${nama}`);
// }
// tampilHalo("Alghi");

// function expression
// const tampilPesan = function (nama) {
//   alert(`haloo ${nama}`);
// };
// tampilPesan("alghi");

//arrow function
// const tampilPesan = (nama) => {
//   alert(`halloo ${nama}`);
// };
// tampilPesan("alghi");

// 2 parameter
// const tampilPesan = (nama, waktu) => {
//   return `halloo ${nama}, selamat ${waktu}`;
// };
// console.log(tampilPesan("alghi", "malam"));

// jika paramater hanya satu, bisa ditulis tanpa ()
// jika isi hanya return, bisa tidak ditulis return
// const tampilPesan = (nama) => `halloo ${nama}`;
// console.log(tampilPesan("alghi"));

//jika tanpa parameter wajib menuliskan ()
// const tampilPesan = () => `halloo world`;
// console.log(tampilPesan());

// tanpa arrow function
// const mhs = ["Alghi", "Abudzar", "Muhammad"];
// const jmlHuruf = mhs.map(function (nama) {
//   return nama.length;
// });
// console.log(jmlHuruf);

// dengan arrow function
// const mhs = ["Alghi", "Abudzar", "Muhammad"];
// const jmlHuruf = mhs.map(nama => nama.length);
// console.log(jmlHuruf);

// jika ingin me-return dalam object, bungkus object dengan ()
// const mhs = ["Alghi", "Abudzar", "Muhammad"];
// const jmlHuruf = mhs.map((nama) => ({ nama: nama, jumlahHuruf: nama.length }));
// console.table(jmlHuruf);

//jika mengubah function expression menjadi arrow function, maka context this menjadi berbeda
// konsep this pada arrow function
// constructor function
// const Mahasiswa = function () {
//   this.nama = "Alghi";
//   this.umur = 30;
//   this.sayHello = function () {
//     console.log(`halloo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   };
// };

// const alghi = new Mahasiswa();

// mengubah menjadi arrow function
// const Mahasiswa = function () {
//   this.nama = "Alghi";
//   this.umur = 30;
//   this.sayHello = () => {
//     console.log(`halloo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   };
// };

// const alghi = new Mahasiswa();

// object literal
// const mhs1 = {
//   nama: "alghi",
//   umur: 30,
//   sayHello: function () {
//     console.log(`halloo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = "Alghi";
//   this.umur = 30;
//   this.sayHello = () => {
//     console.log(`halloo nama saya ${this.nama}, umur saya ${this.umur} tahun`);
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const alghi = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
