const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka >=3 dengan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

//mencari angka >=3 dengan filter
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// console.log(newAngka);
//penulisan dengan arrow function
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2 menggunakan map
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(newAngka);

// method chaining
// cari angka > 5, kalikan 3, lalu jumlahkan
// const hasil = angka
//   .filter((a) => a > 5)
//   .map((a) => a * 3)
//   .reduce((acc, curr) => acc + curr);
// console.log(hasil);

// implementasi Higher Order Function (Filter, Map & Reduce)
// mengambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// pilih hanya "JAVASCRIPT LANJUTAn"
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // ambil durasi video
  .map((item) => item.dataset.duration)
  // ubah durasi menjadi float, lalu ubah menit menjadi detik
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);
// ubah format menjadi jam, menit, detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;

const menit = Math.floor(jsLanjut / 60);

const detik = jsLanjut - menit * 60;
// simpan kedalam DOM
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;
console.log(detik);

// hitung jumlah video pada playlist 'Javascript Lanjutan' dan masukan ke dalam class 'jumlah-video'
const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const jmlVidElement = document.querySelector(".jumlah-video");
jmlVidElement.textContent = `${jmlVideo} Video`;
