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
const mhs = {
  nama: "Muhammad Bilal",
  semester: 5,
  mataKuliah: [
    "Rekayasa Perangkat Lunak",
    "Interaksi Manusia dengan Komputer",
    "Etika Profesi",
    "Perancangan OOP",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;
