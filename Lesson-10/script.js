// JQuery
// $.ajax({
//     url:'http://www.omdbapi.com/?i=tt3896198&apikey=91d9df80&s=avengers',
//     success: movies => console.log(movies)
// });

// Ajax vanila js
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if (xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     }else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get','http://www.omdbapi.com/?i=tt3896198&apikey=91d9df80&s=avengers');
// xhr.send();

// Fetch
// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=91d9df80&s=avengers")
//   .then(response => response.json())
//   .then((response) => console.log(response));

// Promise
// let ditepati = true;
// const janji1= new Promise((resolve, reject)=>{
//     if( ditepati){
//         resolve('janji telah ditepati!');
//     }else {
//         reject('ingkar janji');
//     }
// });
// janji1.then((response)=> console.log('OK! :' + response))
// .catch(response => console.log('NOT OK! :'+ response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setalah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log('mulai');
// console.log(janji2.then(()=> console.log(janji2)));
// console.log('selesai');

// contoh finally
// console.log("mulai");
// console.log(
//   janji2
//     .finally(() => console.log("selesai menunggu!"))
//     .then(() => console.log(janji2))
// );
// console.log("selesai");

// Promise.all()
const film = new Promise( resolve => {
    setTimeout(() =>{
        resolve([{
            title: 'Avengers',
            year: '2014',
        }])
},1000);
});

const cuaca = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve([{
            description: "Hujan",
            temperature: "35 C"
    }])
},500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));
Promise.all([film,cuaca])
// .then(response => console.log(response))
.then(response =>{
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});