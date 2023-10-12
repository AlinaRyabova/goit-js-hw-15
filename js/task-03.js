const loginForm = document.querySelector(`.login-form`);

loginForm.addEventListener(`submit`, onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });
  if (userData.email && userData.password) {
    console.log(`Введенні дані:`, userData);
    loginForm.reset();
  } else {
    alert(`Будь ласка, заповніть всі поля`);
  }
}
