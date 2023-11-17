Error Handling pada fetch menggunakan try dan catch
// https://www.w3schools.com/jsref/try_catch.asp
const url = 'https://api.github.com'; // URL API GitHub
let response;
fetch(url)
.then((res) => {
console.log('Response:', res);
return res.json();
})
.then((data) => {
console.log('Data:', data);
if (response === 200){
document.getElementById("hasil").innerHTML = "Berhasil";
} else{
document.getElementById("hasil").innerHTML = "Gagal";
};
})
.catch((error) => {
console.log('Error:', error);
document.getElementById("hasil").innerHTML = "Terjadi kesalahan";
});
