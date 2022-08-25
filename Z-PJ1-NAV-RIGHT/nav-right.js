// FIXME:
// let zaloBtn = document.getElementsByClassName("zcbm-btn");
// zaloBtn.onclick = function () {
//     alert("AAAA");
// }

function myFunction() {
    alert(`Hệ Thống Hiện Đang Bảo Trì 
Vui lòng thử lại sau!`);
}


let zlBtn = document.getElementById("button-icon-zalo")

zlBtn.onclick = function () {
    console.log(document.getElementsByClassName("zalo-chat-box")[0]);
    if (!document.getElementsByClassName("zalo-chat-box")[0].classList.contains("zalo-onl")) {
        document.getElementsByClassName("zalo-chat-box")[0].classList.add("zalo-onl")
    } else { 
        document.getElementsByClassName("zalo-chat-box")[0].classList.remove("zalo-onl")
    }
}

