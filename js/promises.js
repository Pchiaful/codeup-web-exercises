"use strict";

// const KEYLINK = PERSONAL_PROMISES_KEY;

const GITHUBLINK = 'https://api.github.com/${username}/events/';

// "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}"

const userName = {
    username: 'username'
}

const options = {
    method: 'Get',
    headers: {
        'Authorization': 'token ${KEYLINK}'
    },
    path: JSON.stringify(userName),
};

fetch(GITHUBLINK, options)
    .then(response => response.json())
    .then(data => {
        console.log(data[1].created_at)
    })
    .catch(console.error)




// fetch(GITHUBLINK)
//     .then(response => response.json())
//     .then((data) => console.log(data.))
//     .catch(console.error)


//
// fetch(GITHUBLINK, options)
//     .then(response => response.json)
//     .then(console.log)
//     .catch(console.error)

