// example1
let myName = 'Charley' //  myName可改  'string'
let age = '今年5歲了'
console.log(myName)
let word = myName + age //字串相加
console.log(word)
//alert example2
let title = '系統提示:'
let title1 = '成功'
let title2 = '錯誤'
let alert1 = title + title1
let alert2 = title + title2

console.log(alert1)
console.log(alert2)

//數字 + - * %/
let score = 100
console.log(score + 200)
console.log(score - 200)
console.log(score * 200)
console.log(score / 200)
console.log('餘數：', score % 5) //餘數



let isFake = false
console.log(isFake)

let bag = undefined //沒有定義
console.log(bag)

let bag2 = null//有定義但找不到
console.log(bag2)

//var let const 宣告變數的三個東西
//let 可更改 const不行

let aa = "aa"
console.log(aa)
aa = 'bb' //可以執行
console.log(aa)

const aaa = "aaa"
console.log(aaa)
aaa = "bbb" //const不可更改 所以會error
console.log(aaa)

