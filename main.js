'use strict'
//1 
//promise
  fetch("https://web-app-papatomatoe.herokuapp.com/posts")
  .then(function (response) {
    response.json().then(function (data) {
      console.log('data', data)
    })
  })
  fetch("https://web-app-papatomatoe.herokuapp.com/posts/1")
  .then(function (response) {
    response.json().then(function (data) {
      console.log('data', data)
    })
  })
  fetch("https://web-app-papatomatoe.herokuapp.com/sections")
  .then(function (response) {
    response.json().then(function (data) {
      console.log('data', data)
    })
  })
//async await 
//не получилось :(

//2 
//не получилось :(

//3
//не получилось :(
