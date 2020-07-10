const bootstrapCard = val => {
    return `<div class='col-md-4'>
    <div class="shadow m-3 card w-100" style="width: 18rem;">
  <img src="${val.picture.large}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${val.login.username}</h5>
    <p class="card-text">${val.email}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>`
};

// ES5 - Old Javascript

fetch(`https://randomuser.me/api/?results=10`)
    .then(function(pant) {
        return pant.json()
    })
    .then(function(userData){
        userData.results.map((val => {
            document.getElementById('user-list').innerHTML += bootstrapCard(val);
        }))
    })
    .catch(function(error){
        alert('Hey You have an Error', error);
    })

// ES 6 - New Javascript

// fetch(`https://randomuser.me/api/?results=10`)
//     .then(pant => pant.json())
//     .then(userData => {
//         userData.results.map((val => {
//             document.getElementById('user-list').innerHTML += bootstrapCard(val);
//         }))
//     })
//     .catch(err => console.log(err))
