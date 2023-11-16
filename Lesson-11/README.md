Fetch
apa itu Fetch?
Fetch adalah metode yang digunakan untuk mengirimkan permintaan HTTP ke server dan memproses hasilnya. Metode ini dapat dijadwalkan dengan menggunakan Promise atau callback, dan juga dapat membaca data dari cache jika tidak perlu menghubungi server.

catatan:
pada materi ini ditemukan kendala saat menggunakan eventhandler
saat penggunaan AddEventListener secara langsung, event tidak terbaca dikarenakan AddEventListener digunakan langsung, solusinya bisa menggunakan event delegation.

penulisan fetch : fetch(Resource, init)
- Resource adalah URL yang akan diambil data.
- Init adalah parameter untuk menentukan bagaimana cara pemrosesan request dan response.
fetch() memiliki beberapa method seperti GET, POST, PUT, DELETE, OPTIONS, HEAD,TRACE, CONNECT, PATCH.
init digunakan untuk konfigurasi tambahan pada sebuah request berbentuk object.
hasil dari fetch berupa promise,
untuk mengakses hasilnya bisa dilakukan dengan .then(), atau await.

method dalam response
response.ok - true jika status code antara 200 dan 399 (termasuk).
response.status - nilai dari status code HTTP.
response.statusText - teks deskripsi dari status code HTTP.
response.url - url asli yang dipanggil.
response.headers - objek headers yang terdapat didalam response.
response.bodyUsed - true jika body sudah diambil.

metode untuk membaca isi response
response.text() - mengembalikan string.
response.json() - mengembalikan JSON.
response.blob() - mengembalikan Blob.
response.arrayBuffer() - mengembalikan ArrayBuffer.
response.formData() - mengembalikan FormData.