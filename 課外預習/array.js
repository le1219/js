//ARRAY
//假設要let 30個人
let c1 = '小明'
//.........
let c30 = '小白' //這時候有array去比較快 

let classA = ['aaa', 'bbb', 'ccc']
console.log('before:', classA)
classA.push('ddd')//.push
console.log('after', classA)
console.log('after:', classA.length)//.length可找長度

let igPhoto = ['https://www.google.com/image2.png', 'https://www.google.com/image3.png', 'https://www.google.com/image1.png'
]
//叫出整列裏的東西
console.log('1st:', igPhoto[0])
console.log('2st:', igPhoto[1])
console.log('3st:', igPhoto[2])

//物件object 宣告一個有屬性的物件 可以不一樣 
const card = {
    name: 'CHARLEY',
    address: 'TAIWAN',
    age: '5'
}
console.log(card)
//裡面很多東西也可以單獨叫出
console.log('age:', card.age) //利用.去呼叫

//array object 也可混合使用 
//object包array
const post = {
    image: 'https://www.google.com/image2.png',
    desc: 'img1',
    date: '2000/04/02',
    Comment: ['good', 'excellent', 'well']
}
const post2 = {
    image: 'https://www.google.com/image5.png',
    desc: 'img1',
    date: '2000/04/02',
    Comment: ['go222od', 'exc111ellent', '11111']
}
const print = [
    post,
    post,
    post
]
console.log(print)//這裏會顯示三則post

const printf = [
    post,
    post2
]
console.log(printf)//這裏會顯示2則post