const button = document.querySelector('#login-button');

button.addEventListener('click', function(event) {
  event.preventDefault();
  const loginEmail = document.querySelector('#inputName').value;
  const password = document.querySelector('#inputPassword').value;

  fetch('https://infinity.tail1f457.ts.net:10000/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login_or_email: loginEmail,
      password: password,
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    window.location.reload();
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
});