// let btnCreate = document.getElementsByClassName("admin-btn-create")
// //   btnCreate.onclick = createList()
function createList (){
    let newID = prompt("Nhập id")
    let newTitle = prompt("Nhập fakeNewsTitle")
    let newContent = prompt("Nhập fakeNewsContent")
    let newDate = prompt("Nhập fakeNewsDate")
    let newImg = prompt("Nhập fakeNewsImage")
    let apiFromSheet = `https://sheetdb.io/api/v1/soije5wvkyu5m?sheet=LIST`
    let data = {
          id: newID,
          fakeNewsTitle: newTitle,
          fakeNewsContent: newContent,
          fakeNewsDate: newDate,
          fakeNewsImage: newImg
      }
      fetch(apiFromSheet, {
          method: 'POST', // tạo mới
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
  }
  
function updateList (){
  let updateId = prompt("Nhập vào id muốn update");
  let updateTitle = prompt("Nhập vào tiêu đề mới muốn sửa")
  let apiUpdate = `https://sheetdb.io/api/v1/soije5wvkyu5m/id/${updateId}`
  let data2 = {
    fakeNewsTitle: updateTitle,
  } 
  fetch(apiUpdate, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
  })
}

function deleteList (){
  let deleteId = prompt("Nhập vào id muốn xóa");
  // let deleteTitle = prompt("Nhập vào tiêu đề mới muốn sửa")
  let apiDelete= `https://sheetdb.io/api/v1/soije5wvkyu5m/id/${deleteId}`
  let data3 = {
    fakeNewsTitle: "",
  }
  fetch(apiDelete, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data3),
  })
}