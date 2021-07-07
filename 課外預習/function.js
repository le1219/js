//function
function hello() {
    console.log('halo');
}
function hello2() {
    console.log('halo2');
}
function hello3() {
    console.log('halo3');
}

//執行
hello();
hello2();
hello3();

//開了一個function可以用無限次
function addMoney() {
    console.log(100 + 200);
}
//首頁
addMoney();
//結帳頁
addMoney();

//開了一個function可以用無限次
function add(p1, p2) {
    console.log(p1 + p2);
}
//首頁
add(20, 80);
//結帳頁
add(32, 9);

//-------------------------
function count(price1, price2, discount) {
    let result = price1 + price2 - discount;
    let message = '普通會員';

    if (result > 50000) {
        message = '高級會員';
        return message//正常來說從上往下會跑到這裡才對，但加return判斷到就不會錯了

    }
    if (result > 20000) {
        message = '中級會員';
        return message
    }
    return message
}
let msg = count(50000, 121000, 20000)
console.log('msg', msg);

//-----------使用function---------------
//構造函數 function
function createCard(name) {
    this.cardName = name;
}
//new建立
const a1 = new createCard('ALLEN');
const a2 = new createCard('Ben');
console.log(a1)
console.log(a2)