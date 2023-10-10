// 1. object literal
// let mahasiswa1 = {
//     nama: 'Alghi',
//     energi: 100,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Aiman',
//     energi: 100,
//     makan: function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

//2. function declaration
// cara ini lebih efesien karna hanya membuat method sekali, tinggal mengisi nilai secara berulang
// tapi, sebenernya method tetap dibuat kembali setiap mengisikan nilai, dimana akan berpengaruh pada memori
// jadi, untuk menjaga efektifitas dan meminimalkan penggunaan memori, caranya dengan membuat object terpisah.
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`selamat bermain ${this.nama}`);
//     }
//     return mahasiswa;
// }
// let alghi = Mahasiswa('Alghi', 10);
// let aiman = Mahasiswa('aiman', 100);
// --------------------------------------------------------------------------------------------
// dibawah ini adalah cara dengan object terpisah
// dengan cara ini, ketika dijalankan object ini akan disimpan satukali di dalam memori.
const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makan!`);
    },
    main:  function(jam){
        this.energi -= jam;
        console.log(`selamat bermain ${this.nama}`);
    },
    tidur: function(jam){
        this.energi += jam * 2;
        console.log(`selamat tidur ${this.nama}`);
    }
};
// setiap object yang telah dibuat harus dideklarasikan agar terhubung.
// function Mahasiswa(nama, energi){
//         let mahasiswa = {};
//         mahasiswa.nama = nama;
//         mahasiswa.energi = energi;
//         mahasiswa.makan = methodMahasiswa.makan;
//         mahasiswa.main = methodMahasiswa.main;
//         mahasiswa.tidur = methodMahasiswa.tidur;
        
//         return mahasiswa;
//     }
// cara dibawah ini agar method tidak perlu dideklarisakan, menggunakan object.create().
// Object.create() diisi dengan parameter yang mengacu pada parent object. pada kasus ini, parent object nya adalah 'methodMahasiswa'
function Mahasiswa(nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}
let alghi = Mahasiswa('Alghi', 10);
let aiman = Mahasiswa('aiman', 100);

//3. constructor function
//keyword new
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`selamat bermain ${this.nama}`);
//     }
// }

// let alghi = new Mahasiswa('alghi',100);