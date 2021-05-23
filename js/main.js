let users = [{ name: 'John', score: 10 }, { age: 31 }, { name: 'Joe', score: 0 }];


console.log(undefined && 'b'); //undefined
console.log(0 && 1); //0
console.log('a' && 'b'); //b


//users.forEach(user => console.log(user.name.length));// Cannot read property 'city' of undefined     
users.forEach(user => console.log(user.name && user.name.length));


console.log(undefined || 'a'); //a
console.log(0 || 1); //1
console.log(false || true); //true
console.log('a' || 'b'); //a

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
console.log(0 ?? 1); //0
console.log(false ?? true); //false
console.log('a' ?? 'b'); //a


document.getElementById('nullish').innerHTML =
    users.reduce((t, o, idx) =>
        t + `<tr><td>${idx}</td><td>${o.name ?? ''}</td><td>${o.age ?? ''}</td><td>${o.score ?? ''}</td></tr>`, '');



