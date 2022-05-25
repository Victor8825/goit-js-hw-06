const formEl = document.querySelector(".login-form");

function onFormSubmit (event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;

  if( email === "" || password === "" ) {
    alert("Все поля формы должны быть заполнены");
  }
  else {
    const formData = {
      email,
      password
    };
    console.log(formData);
    formEl.reset();
  }
}

formEl.addEventListener("submit", onFormSubmit);

