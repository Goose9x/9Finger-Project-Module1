// let api = `https://sheetdb.io/api/v1/soije5wvkyu5m?sheet=LIST`
// Truyền thêm hậu tô " ?sheet= tên sheet "" để lấy data từ sheet khác

// fetch(api);
// console.log(fetch(api));
// fetch(api).then(function (response){
    // console.log(response.json());
//     return response.json()
// }).then(function(data){
//     console.log(data);
    // Đã lấy được data--> tiền hành các thao tác in data ra HTML
    // innerHTML =`<div></div>` Về test cái này để làm btap
// })


// GET (Read)
// POST (Create)
// PUT (Update)
// DELETE (Delete)

// let data = {
//     id: "3",
//     name: "Hello world",
//     content: "AJSHD IAOUS*(D A*YSDIJABJS *Á Ạ ASH DAJKSD ÁO ADB KAS 0",
//     author: "Cuong",
//     createdAT: "31/01/2022",
//     imgURL: "13213123"
// }
// fetch(api, {
//   method: 'POST', // tạo mới
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// }).then(function(response){
//     return response.json();
// }).then(function (data){
//     console.log(data);
    // Toàn bộ những hành động phía sau như là 
    // alert thêm mới thành công, innerHTML,...
    // logic
    // Thì phải xử lý logic ở .then thứ 2 (là tk này)
// })



// let apiUpdate = `https://sheetdb.io/api/v1/soije5wvkyu5m/id/1`;
// let data2 = {
//     name: "Viet ANh x2"
// }
// fetch(apiUpdate, {
//     method: 'PUT', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data2),
//   }).then(function(response){
//     return response.json();
// }).then(function (data){
//     console.log(data);
//     // logic
// })





// BÀI LÀM

let api = `https://sheetdb.io/api/v1/soije5wvkyu5m`

function start (){
  getNews(renderNews);
}

start()

// Function
function getNews(callback){
  fetch(api)
    .then(function(response){
      return response.json();
    })
    .then (callback);
}
function renderNews (news){
  let apiListBlock = document.querySelector("#api-list")
  let htmls = news.map(function(nineFinger){
    return `
    <div class="fake-news-list">
      <div class="list-1">
        <img src=${nineFinger.fakeNewsImage} alt="photo" id="fake-news-image">
        <div class="fake-news-text">
        <a href="http://127.0.0.1:5500/info1/info.html"><h3 class="fake-news-title">${nineFinger.fakeNewsTitle}</h3></a>
        <p class="fake-news-content">${nineFinger.fakeNewsContent}</p>
        <h3 class=" fake-news-date">${nineFinger.fakeNewsDate}</h3>
        </div>
      </div>
    </div>
    `;
  })
  apiListBlock.innerHTML = htmls.join('')
}





// let apiListBlock = document.querySelector("#api-list")

// let data = {
//   id: "2",
//   fakeNewsTitle: "Báo cáo tài chính là gì? Cách đọc báo cáo tài chính và những thủ thuật",
//   fakeNewsContent: "Hướng dẫn cách đọc báo cáo tài chính cho các nhà đầu tư chứng khoán. Tìm hiểu về định nghĩa, hướng dẫn quy trình",
//   fakeNewsDate: "2 tháng trước",
//   fakeNewsImage: "https://cdn.takeprofit.vn/1656607728740",
// }
// fetch(api, {
//   method: 'POST', // tạo mới
//   headers: {
//     'Content-Type': 'application/json',
// },
// body: JSON.stringify(data),
// }).then(function(response){
//   return response.json();
// }).then(function (data){
//   console.log(data);
//   document.getElementById("fake-news-image").href(fakeNewsImage)
// })

