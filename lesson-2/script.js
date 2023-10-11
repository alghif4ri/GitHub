// Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = 'alghi';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// inilah yang disebut konsep Hoisting
// window = global object
// this = window

// Execution Phase, fase mengeksekusi kode tiap baris dari atas kebawah, kode diatas akan menghasilkan 'undefined'.
// karena log dieksekusi sebelum diberi nilai.

// var nama = 'alghi';
// var umur = 30;
// console.log(sayHello());
// function sayHello(){
//     return `Hallo ${nama}, umur kamu ${umur}`;
// }

//function membuat Local Execution Context yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Alghi';
// var username = 'abdz.alghifari';

// function cetakURL(username){
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a(){
//     console.log(`ini a`);

//     function b(){
//         console.log(`ini b`);

//         function c(){
//             console.log(`ini c`);
//         }
//         c();
//     }
//     b();
// }
// a();

function satu(){
    var nama = 'alghi';
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = 'Aiman';
satu();
dua('Taslim');
console.log(nama);