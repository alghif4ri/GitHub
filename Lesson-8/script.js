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
