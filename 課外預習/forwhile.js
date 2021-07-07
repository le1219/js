//for
for (i = 0; i < 9; i++) {
    console.log('i=' + i);
}

for (j = 0; j < 9; j += 3) { //可以不加1
    console.log('j = ' + j);

}
for (var k = 100; k >= 0; k -= 10) {//也可-- -=
    console.log('k = ' + k);
}
let classA = [100, 70, 90]
for (let a = 0; a <= classA.length; a++) {
    console.log('a:' + classA);
}
let classB = [100, 60, 1]
classB.push(2)
console.log('b:', classB)
for (let b = 0; b <= classB.length; b++) {
    console.log('b: ', classB[b]);

}
// ------------------------------
