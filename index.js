const callback = function () {
    return chai.spy
}


function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    const add = (x, y) => { return x + y }
    return add
}

function returnsAnAnonymousFunction() {
    return (function () {
        console.log('hello')
    })
}