
"use strict";

// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

// const myPromise = fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));


//MORE RESEARCH ON THIS

// const githubPromise = fetch('https://api.github.com/repositories');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
//
// Promise.all([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         // here data is an array of the resolved values from each promise
//         // we can now do something with both pieces of data
//     })
//     .catch(function(error) {
//         // handle errors
//     });

// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( userObj  => {
//             // do something with the username login
//             console.log(userObj.login);
//         });
//     });
// });

// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }
//
// // later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     }, 1500);
// });
//
// console.log(myPromise); // a pending promise
//
// myPromise.then(() => console.log('resolved!'));
// myPromise.catch(() => console.log('rejected!'));

// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(message => console.log('Promise resolved!', message));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(message => console.log('Promise rejected!', message));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"

//EXERCISES SOLVED BELOW:


function userPushRecent(username) {
    let url = `https://api.github.com/users/${username}/events`;


    fetch(url, {headers: {"Authorization": githubTOKEN}})
        .then(response =>
            response.json())
                .then(data => {
                    const commits = data.filter(event => event.type === 'PushEvent');
                    console.log(`${username} had their last commit on ${commits[0].created_at}.`);
                    // console.log(data[0].created_at);
                    console.table([data]);
                });
}

console.log(userPushRecent("3arglop"));
console.log(userPushRecent("crisalmendarez"));


function wait(num) {
    return new Promise(resolve => setTimeout(resolve, num));
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
