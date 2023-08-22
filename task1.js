
let obj1 = {name:"person 1", age:5};
let obj2 = {age:5, name:"person 1"};

function compareJSON(obj1, obj2) {
    const a = JSON.stringify(obj1, Object.keys(obj1).sort());
    const b = JSON.stringify(obj2, Object.keys(obj2).sort());

    return a === b;
}

const result = compareJSON(obj1, obj2);
console.log(result);