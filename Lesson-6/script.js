// Destructuring Assignment / Variable

// Destructuring Array
const perkenalan = ["halo", "nama", "saya", "alghi"];
// const [salam, satu, dua, tiga] = perkenalan;
// skip items
// const [salam, , , tiga] = perkenalan;
// console.log(tiga);

// swap items
// let a = 1;
// let b = 2;
// console.log(a); // 1
// console.log(b); // 2
// [a, b] = [b, a];
// console.log(a); // 2
// console.log(b); // 1

// return value pada function
// function coba() {
//   return [1, 2];
// }
// const [a, b] = coba();
// console.log(b); // 2

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(values);

//destructuring object
// const mhs = {
//   nama: "alghi",
//   umur: 30,
// };
// const { nama, umur } = mhs;
// console.log(nama); // alghi

// assignment tanpa deklasi object
// ({ nama, umur } = {
//   nama: "alghi",
//   umur: 30,
// });
// console.log(nama); // alghi

// assignment ke variable baru
// const mhs = {
//   nama: "alghi",
//   umur: 30,
// };
// const { nama:n, umur:u } = mhs;
// console.log(n); // alghi

// memberikan default value
// const mhs = {
//   nama: "alghi",
//   umur: 30,
// };
// const { nama, umur, email = "tidak ada email" } = mhs;
// console.log(email); // tidal ada email

// memberi default value dan assign ke variable baru
// const mhs = {
//   nama: "alghi",
//   umur: 30,
// };
// const { nama: n, umur: u, email: e = "tidak ada email" } = mhs;
// console.log(e); // tidak ada email

//rest parameter + default value
// const mhs = {
//   nama: "alghi",
//   umur: 30,
//   email: "r.abudzar@gmail.com",
// };
// const { nama, ...values } = mhs;
// console.log(values); // { "umur": 30, "email": "r.abudzar@gmail.com" }

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 123,
//   nama: "alghi",
//   umur: 30,
//   email: "r.abudzar@gmail.com",
// };

// function getIdMhs({ id }) {
//   return id;
// }

// console.log(getIdMhs(mhs));

// Destructuring Funtion

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }
// tanpa destructuring
// const jumlah = kalkulasi(2, 3)[0];
// const kali = kalkulasi(2, 3)[1];
// console.log(jumlah); //5
// console.log(kali); //6

// dengan destructuring
// const[jumlah, kali] = kalkulasi(2,3);
// console.log(jumlah); //5
// console.log(kali); //6
// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// destructuring object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: (a / b).toFixed(2),
//   };
// }
// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// destructuring fucntion arguments
const mhs1 = {
  nama: "alghi",
  umur: 30,
  email: "r.abudzar@gmail.com",
  nilai: {
    matematika: 87,
    indonesia: 94,
    inggris: 88,
  },
};

// function declaration
// function cetakMhs(nama, umur) {
//   return `halo, nama saya ${nama}, umur ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

//mengirim parameter sebagai object
// function cetakMhs(mhs) {
//   // parameter dengan object
//   return `halo, nama saya ${mhs.nama}, umur ${mhs.umur} tahun`;
// }
// console.log(cetakMhs(mhs1));

// dengan destructuring
// function cetakMhs({ nama, umur, nilai }) {
//   // parameter dengan object
//   return `halo, nama saya ${nama}, umur ${umur} tahun, dan nilai mtk saya ${nilai.matematika}`;
// }
// console.log(cetakMhs(mhs1));
