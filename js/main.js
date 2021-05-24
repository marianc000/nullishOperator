let users = [{ name: 'John', score: 10 }, { age: 31 }, { name: 'Joe', score: 0 }];


console.log(undefined && 'a'); //undefined
console.log(0 && 1); //0
console.log('a' && 'b'); //b

console.log('');

function and(value1, value2) {
    if (value1) return value2;
    else return value1;
}

console.log(and(undefined, 'a')); //undefined
console.log(and(0, 1)); //0
console.log(and('a', 'b')); //b

console.log('');

//users.forEach(user => console.log(user.name.length));// Cannot read property 'city' of undefined     
users.forEach(user => console.log(user.name && user.name.length));

console.log('');

console.log(undefined || 'a'); //a
console.log(0 || 1); //1
console.log(false || true); //true
console.log('a' || 'b'); //a

console.log('');

function or(value1, value2) {
    if (value1) return value1;
    else return value2;
}

console.log(or(undefined, 'a')); //a
console.log(or(0, 1)); //1
console.log(or(false, true)); //true
console.log(or('a', 'b')); //a

console.log('');

document.getElementById('noDefault').innerHTML =
    users.reduce((t, o, idx) =>
        t + `<tr><td>${idx}</td><td>${o.name}</td><td>${o.age}</td><td>${o.score}</td></tr>`, '');

document.getElementById('or').innerHTML =
    users.reduce((t, o, idx) =>
        t + `<tr><td>${idx}</td><td>${o.name || ''}</td><td>${o.age || ''}</td><td>${o.score || ''}</td></tr>`, '');

document.getElementById('undefined').innerHTML =
    users.reduce((t, o, idx) =>
        t + `<tr><td>${idx}</td><td>${o.name || ''}</td><td>${o.age || ''}</td><td>${o.score === undefined ? '' : o.score}</td></tr>`, '');


console.log(undefined ?? 'a'); //a
console.log(null ?? 'a'); //a
console.log(0 ?? 1); //0
console.log(false ?? true); //false
console.log('a' ?? 'b'); //a

console.log('');

function nullish(value1, value2) {
    if (value1 === undefined || value1 === null) return value2;
    else return value1;
}

console.log(nullish(undefined ?? 'a')); //a
console.log(nullish(null ?? 'a')); //a
console.log(nullish(0 ?? 1)); //0
console.log(nullish(false ?? true)); //false
console.log(nullish('a' ?? 'b')); //a

document.getElementById('nullish').innerHTML =
    users.reduce((t, o, idx) =>
        t + `<tr><td>${idx}</td><td>${o.name ?? ''}</td><td>${o.age ?? ''}</td><td>${o.score ?? ''}</td></tr>`, '');



