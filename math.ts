function squared(x) {
    return (x * x)
}

function cubed(x) {
    return (x * x * x)
}

function a2(x) {
    return (x + squared(x) + cubed(x))
}

console.log(a2(1))

function f2(x, y, z) {
    return (
        a2(x) + a2(y) + a2(z))
}
console.log(f2(1, 1, 1))





// function a1(n) {
//     return (n + n * n)
// }

// function a(x, y) {
//     return (a1(x) + a1(y))
// }
// console.log(a(1, 2));


// function b(y) {
//     return ((y * y) - y - 1)
// }
// console.log(b(2))

// function c(x, y) {
//     return a(x, y) / b(y)
// }
// console.log(c(1, 2))

