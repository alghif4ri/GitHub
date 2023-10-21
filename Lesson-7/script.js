// looping array
// const mhs = ["Alghi", "Aiman", "Acim"];

// for
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// forEach
// mhs.forEach((nama) => console.log(`Nama saya ${nama}`));

//for..of
// for (const nama of mhs) {
//   console.log(`Nama saya ${nama}`);
// }

// looping string
// const nama = "Alghi";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Alghi", "Aiman", "Acim"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

// NodeList
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.textContent));

// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(2, 3, 4, 5));

// for..in
const mhs = {
  nama: "alghi",
  umur: 30,
  email: "r.abudzar@gmail.com",
};
// for (m of mhs) {
//   console.log(m); // error, not iterable
// }

// mengambil nama properti / index
// for (m in mhs) {
//   console.log(m); // nama, umur, email
// }

// mengambil isi properti
// for (m in mhs) {
//   console.log(mhs[m]); // alghi, 30, r.abudzar@gmail.com
// }
