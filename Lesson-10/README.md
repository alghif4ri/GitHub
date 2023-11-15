Asynchronous Promise
apa itu promise?
Promise adalah objek yang dapat memiliki satu atau beberapa nilai, dan juga menunggu hasil dari operasi asynchronous. Ketika kita membuat sebuah promise
sebagai instance dari class Promise, maka akan diberikan tiga metode: `then`,
`catch`, dan `finally`. Metode ini digunakan untuk mengatur apa yang harus dilakukan jika suatu operasi berhasil/gagal dan selesai.
keadaan (states) jika terpenuhi fullfilled, jika gagal rejected, dan pending ketika menunggu.
ada 3 fungsi callback, yaitu resolve, reject, dan finally
resolve digunakan untuk mengembalikkan hasil operasi asinkron
reject digunakan untuk memberitahu bahwa ada error pada proses asinkron
finally digunakan untuk melakukan aksi setelah seluruh proses asinkron telah berakhir
aksi ketika promise terpenuhi then, dan catch ketika reject
contoh 1 :
let ditepati = true;
consts janji1= new Promise((resolve, reject)=?{
    if( ditepati){
        resolve('janji telah ditepati!);
    }else {
        reject('ingkar janji');
    }
});
janji1.then((response)=> console.log('OK! :' + response))
.catch(response => console.log('NOT OK! :'+ response));
