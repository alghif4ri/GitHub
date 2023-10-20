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
