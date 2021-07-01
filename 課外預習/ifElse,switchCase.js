// if (...) {
//     //條件成立
// }
// else {
//     //條件失敗
// }
//+——*/算術運算子
// && ｜｜ ！ 邏輯運算子
if (100 > 50) {
    console.log('yes')
} else {
    console.log('no')
}

//&&AND 要兩邊都ture 才是正確 1T 1F都不行 2F當然是錯的
let condition = true && false
console.log(condition) //顯示錯誤

//｜｜OR只要有一邊有true就成立了
let aa = true || false
console.log(aa)

//! not
let anot = !true//反向操作
console.log(anot)

let bnot = !(true || false) //沒！的前提下應該是true
console.log("bnot", bnot)//但現在便是 false

let scoreA = 100
let scoreB = 90
let conditionA = scoreA === scoreB //（condition = a 比較b）

if (scoreA > scoreB) {
    console.log('A考的比較高分')
} else {
    console.log('B考的比較高分')
}

// if else if esle
// if () {

// } else if(){
// }
//  else if(){

// }
// else {

// }
let scoreAA = 10
if (scoreAA >= 100) {
    console.log(100)
} else if (scoreAA >= 80) {
    console.log(80)
} else if (scoreAA >= 60) {
    console.log(60)
} else {
    console.log('bye')
}
// ---------switch case------------------
let key = 500
switch (key) {
    case 100:
        console.log('考了100分')
        break;
    case 200:
        console.log('考了200分')
        break;
    case 300:
        console.log('考了300分')
        break;
    default:
        console.log('bye')
        break;
}