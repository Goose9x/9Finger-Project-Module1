let email = 'tranbien1845@gmail.com'
let password = '123123'
let form = document.getElementById('form')
form.onsubmit = function (event) {
  event.preventDefault()
  if (form.email.value == '') {
    document.getElementById('success').innerHTML = 'Email không được để trống!'
    document.getElementById('success').style.color = 'red'
  }
  if (form.password.value == '') {
    document.getElementById('success').innerHTML =
      'Password không được để trống!'
      document.getElementById('success').style.color = 'red'
  }
  if (form.password.value == '' && form.email.value == '') {
    document.getElementById('success').innerHTML =
      'Email và Password không được để trống!'
      document.getElementById('success').style.color = 'red'
  }
  if (form.email.value !== '' && form.password.value !== '') {
    if (form.email.value !== email) {
      document.getElementById('success').innerHTML = 'Email sai'
      document.getElementById('success').style.color = 'red'
    }
    if (form.password.value !== password) {
      document.getElementById('success').innerHTML = 'Password sai'
      document.getElementById('success').style.color = 'red'
    }
    if (form.password.value !== password && form.email.value !== email) {
      document.getElementById('success').innerHTML = 'Email và Password sai'
      document.getElementById('success').style.color = 'red'
    }
  }
  if (form.email.value === email && form.password.value === password) {
    document.getElementById('success').innerHTML = 'Đăng nhập thành công!'
    document.getElementById('success').style.color = 'green'
    window.location.href = 'http://127.0.0.1:5500/HOME%20PAGE/homepage.html'
  }
}

let dkn = document.getElementById('dkn')
let photo = document.getElementsByClassName('photo')[0]
console.log(photo)
dkn.onclick = function (e) {
  e.preventDefault()
  if (!photo.classList.contains('vitri2')) {
    photo.classList.add('vitri2')
  } else {
    photo.classList.remove('vitri2')
  }
}
