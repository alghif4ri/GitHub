// perbedaan var, let dan const
var nama = "Adi"; // bisa diubah nilainya (mutable)
let umur = 20; // bisa diubah nilai (mutable)
const tinggiBadan = 175; // tidak dapat diubah nilai (immutable)
console.log(nama); // Adi
umur++; // error: Uncaught TypeError: Assignment to constant variable.
tinggiBadan--; // error: Uncaught TypeError: Assignment to constant variable.

// perbedaan block scope dan function scope
function cetakNama() {
  if (true) {
    let nama = "Asep";
    console.log("Dalam fungsi");
  } else {
    let nama = "Budi";
    console.log("Tidak dalam fungsi");
  }
}
cetakNama();
console.log(`Di luar fungsi ${nama}`);
