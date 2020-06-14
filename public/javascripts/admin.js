

let form = document.getElementById('admin-form');

form.addEventListener('submit', function (evt) {

  evt.preventDefault();

  let data = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  };

  let headers = new Headers();

  headers.append('Content-Type','application/json');
  headers.append('Accept','application/json');

  fetch('/admin/login', {
    method: 'POST',
    redirect:'follow',
    credentials: 'include',
    headers: headers,
    body: JSON.stringify(data),
  })
  .then(response => {
    if(response.redirected) {
      window.location.href = response.url;
    }
  })
  .catch(err => console.log(err));
});
