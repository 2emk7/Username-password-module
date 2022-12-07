const prompt = require('prompt-sync')();

const users = {
admin: {
username: 'admin',
password: 'admin123',
},
user1: {
username: 'user1', //change username here
password: 'pass123',  //change password here
},
};

while (true) {
const username = prompt('Enter your username: ');
const password = prompt('Enter your password: ');

if (users[username] && users[username].password === password) {
console.log('Login successful');
break;
} else {
console.log('Incorrect username or password');
}
}
