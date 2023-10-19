// Template Literals / Template Strings
// const nama = "Alghi";
// const umur = 30;
// console.log(`halloo, nama saya ${nama}, umur saya ${umur}`);

// Embeded Expression
// console.log(`${alert("haloo")}`);
// const x = 11;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// html fragment
// const mahasiswa = {
//   nama: "alghi",
//   umur: 30,
//   npm: 11215410187,
//   email: "r.abudzar@gmail.com",
// };

// const el = `<div class="mhs">
// <h2>${mahasiswa.nama}</h2>
// <span class="npm">${mahasiswa.npm}</span>
// </div>`;
// console.log(el);
// masukan el kedalam element body dengan inner html
// document.body.innerHTML = el;

// implementasi Template Literals

// looping
// const mhs = [
//   {
//     nama: "alghi",
//     email: "r.abudzar@gmail.com",
//   },
//   {
//     nama: "aiman",
//     email: "aiman@gmail.com",
//   },
//   {
//     nama: "acim",
//     email: "acim@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
// ${mhs.map(
//     (m) => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`
//   )
//   .join("")}
// </div>`;

// conditional
// ternary
// const lagu = {
//   judul: "Heat 'em up",
//   artist: "Tupac",
//   feat: "Outlawz",
// };

// const el = `<div class="song"> <ul>
// <li>${lagu.judul}</li>
// <li>${lagu.artist} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
// </ul>
// </div>`;

// nested
// html fragment bersarang
// const mhs = {
//   nama: "Muhammad Bilal",
//   semester: 5,
//   mataKuliah: [
//     "Rekayasa Perangkat Lunak",
//     "Interaksi Manusia dengan Komputer",
//     "Etika Profesi",
//     "Perancangan OOP",
//   ],
// };

// function cetakMataKuliah(mataKuliah) {
//   return `
//     <ol>
//     ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
//     </ol>
//     `;
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="semester">${mhs.semester}</span>
// <h4>Mata Kuliah :</h4>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;
// document.body.innerHTML = el;

// Tagged Template
// const nama = "Alghi";
// const umur = 30;

// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ""}`;
//   //   });
//   //   return result;
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`hallo ${nama}, umur kamu ${umur}`;
// console.log(str);

// contoh implementasi
// const nama = "Alghi";
// const umur = 30;
// const email = "r.abudzar@gmail.com";

// function highlight(strings, ...values) {
//   return strings.reduce(
//     (result, str, i) =>
//       `${result}${str}<span class="hl">${values[i] || ""}</span>`,
//     ""
//   );
// }

// const str = highlight`hallo ${nama}, umur kamu ${umur}, email saya ${email}`;
// document.body.innerHTML = str;
// console.log(str);

// contoh implementasi escaping / sanitize HTML tags
// misal membuat sebuah fungsi dengan nama sanitize, fungsi ini berisi sebuah library untuk mefilter jika ada percoba menjalankan script berbahaya
// function sanitize(strings, ...values) {
//   return DOMPurify.san;
//   aboutMe;
// }

// const nama = "lucky";
// pada variable aboutMe, terdapat sebuat script yang tidak diizinkan
// const aboutMe = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, voluptates. <img scr="http://unsplash.com/100/?/" onload="alert('hihi');"/> `;

// maka, ketika memanggil string akan ditampung terlebih dahulu kedalam fungsi sanitize, dan mengengecek setiap componentnya apakah ada script yang tidak diizinkan oleh library sanitize
// const html = sanitize`<h3>${nama}</h3><p>${aboutMe}</p>`;

// implementasi Tagged Template juga bisa untuk Translation halaman
// reference github.com/sklomer
