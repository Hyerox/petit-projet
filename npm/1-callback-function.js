function sayHello(name) {
    console.log("Hello " + name)
}

sayHello("John")

const sayGoodbye = (name) => {
    console.log("Goodbye " + name);    
}

sayGoodbye("John")

const add = (a, b) => {
    return a + b;
}

console.log(add(40, 2));

const abc = (char, callback) => {
    console.log(char);
    callback(char)
}

const callback = (char) => {
    console.log(char + "XXX")
}

abc("a", callback)

// Fonctionnement de la méthode MAP

const arr1 = [1, 2, 3, 4, 5];
const multi2 = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }
    return newArr;
}

const double = (num) => {
    return num * 2;
}

console.log(multi2(arr1, double));

