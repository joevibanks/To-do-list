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

fetch(`https://randomuser.me/api/?results=10`)
    .then(res => res.json())
    .then(data => {
        data.results.map((val => {
            document.getElementById('user-list').innerHTML += bootstrapCard(val);
        }))
    })
    .catch(err => console.log(err))
