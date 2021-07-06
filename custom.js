// function getRandom(x) {
//     //let x=38 產生值落在0-37，+1後回傳

//     return Math.floor(Math.random() * x) + 1;
// }
// //放置第一區6個號碼的陣列變數
// let arr = [];

// //放置第二區1個號碼的陣列變數
// let n = 0;

// function getPowerNum() {

//     for (let i = 1; i <= 6; i++) {

//         //random 1～38
//         let num = getRandom(38);
//         //check 重複
//         //用indexOf判斷有沒有出現過沒有就去else有就if i--
//         if (arr.indexOf(num) > -1) {
//             i--;
//             continue;
//         } else {//沒出現就放陣列
//             arr.push(num);
//         }
//     }
//     //sort（）
//     arr.sort(function (a, b) {
//         return (a - b);
//     })

//     n = getRandom(8);
//     return `第一區為${arr.join(',')},第二區為 ${n}`;
// }
// for (let i = 0; i < 5; i++) {
//     arr = [];
//     document.write(getPowerNum() + '<br>');
// }




function getRandom(x) {
    //let x=38 產生值落在0-37，+1後回傳

    return Math.floor(Math.random() * x) + 1;
}


function getPowerNum() {
    //放置第一區6個號碼的陣列變數
    let arr = [];

    //放置第二區1個號碼的陣列變數
    let n = 0;
    for (let i = 1; i <= 6; i++) {

        //random 1～38
        let num = getRandom(38);
        //check 重複
        //用indexOf判斷有沒有出現過沒有就去else有就if i--
        if (arr.indexOf(num) > -1) {
            i--;
            continue;
        } else {//沒出現就放陣列
            arr.push(num);
        }
    }
    //sort（）
    arr.sort(function (a, b) {
        return (a - b);
    })
    return arr;
}
let arr6Num = getPowerNum();
console.log(`第一區號碼: `);
for (let i = 0; i < arr6Num.length; i++) {
    document.write(`第 ${i + 1} 個數字: ${arr6Num[i]}<br>`);
}
document.write(`第二區號碼: ${getRandom(8)}`);

