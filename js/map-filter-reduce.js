"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let threeLangUsers =  users.filter(lang => lang.languages.length >= 3);

console.log(threeLangUsers);

let emailOfUsers = users.map(emails => emails.email);

console.log(emailOfUsers);

let totalYearsExp = users.reduce(((a ,b) => a + b.yearsOfExperience), 0);

console.log(totalYearsExp);

let averageYearsExp = users.reduce((a ,b, index, array) => {
    if (index === array.length-1) {
        return (a + b.yearsOfExperience)/array.length;
    }
    return a + b.yearsOfExperience}, 0);

console.log(averageYearsExp);

let longestEmail = users.reduce((a,b) => {
    if (a.length < b.email.length) {
        a = b.email
    }
    return a
}, '')
console.log(longestEmail)


