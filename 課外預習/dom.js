//兩個全域變數
//window document



//callback
window.addEventListener('load', function (event) {
    const p1 = document.getElementById('name_1')
    console.log(name_1);
    p1.innerText = 'halo';//抓到了就可以改裡面的字
    const btn_1 = document.getElementById('btn_1');
    btn_1.addEventListener('click', function () {
        console.log(1);//監聽click
    })
    const box = document.getElementById('box');
    box.innerHTML = '<p>halo</p>'
    const txt = document.getElementById('txt');
    txt.addEventListener('keyup', function (e) {
        console.log('keyup');//keyup按鍵盤
        console.log('e.target.value', e.target.value);
    })
})

