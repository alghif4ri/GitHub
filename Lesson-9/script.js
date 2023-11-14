// callback
// synchronous callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(pesan){
//     const nama = prompt('Masukan Nama: ');
//     pesan(nama);
// }

// tampilkanPesan(halo);

// anonymous function
// function tampilkanPesan(pesan){
//     const nama = prompt('Masukan Nama: ');
//     pesan(nama);
// }

// tampilkanPesan(nama =>
//     alert(`Halo, ${nama}`)
// );

// const mhs = [
//   {
//     nama: "Alghifari",
//     nim: "11215410187",
//     email: "alghi@gmail.com",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1
//   },
//   {
//     nama: "Ahmad",
//     nim: "11215410396",
//     email: "ahmad@gmail.com",
//     jurusan: "Sistem Informasi",
//     idDosenWali: 2
//   },
//   {
//     nama: "Firman",
//     nim: "11215410396",
//     email: "firman@gmail.com",
//     jurusan: "Manajemen Bisnis",
//     idDosenWali: 2
//   },
// ];

// synchronous callback
// console.log('mulai');
// mhs.forEach(m => {
//     for(let i =0; i<10000000; i++){
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// asynchronous callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// function success(results) {
//   const mhs = JSON.parse(results);
//   mhs.mahasiswa.forEach((m) => {
//     console.log(m.nama);
//   });
// }

// function error() {
//   console.log("not found");
// }
// console.log('mulai');
// getDataMahasiswa("data/mahasiswa.json", (results)=>{
//     const mhs = JSON.parse(results);
//     mhs.mahasiswa.forEach(m=>{
//         console.log(m.nama)
//     });
// }, (()=> console.log('not found')));
// console.log('selesai');

// dengan JQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success:(mhs) =>{
        mhs.mahasiswa.forEach(m=>console.log(m.nama))
    },
    error:(err)=>{
        console.log(err.responseText)
    }
})
console.log('selesai');