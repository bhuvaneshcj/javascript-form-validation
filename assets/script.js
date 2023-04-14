(() => {
  "use-strict";

  window.submitForm = submitForm;

  const form = document.getElementById("form");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    const isName = checkNameInput();
    const isEmail = checkEmailInput();
    const isPhone = checkPhoneInput();
    const isPassword = checkPasswordInput();
    console.log(isName, isEmail, isPhone, isPassword);
    if (isName == undefined && isEmail == undefined && isPhone == undefined && isPassword == undefined) {
      return true;
    } else {
      e.preventDefault();
    }
  });

  function checkNameInput() {
    const id = "name-error";

    if (!name.value) {
      setError(id, "Name is required");
      return false;
    } else {
      setSuccess(id);
    }
  }

  function checkEmailInput() {
    const id = "email-error";

    if (!email.value) {
      setError(id, "Email is required");
      return false;
    } else if (!isEmail(email.value)) {
      setError(id, "Invalid email");
      return false;
    } else {
      setSuccess(id);
    }
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  function checkPhoneInput() {
    const id = "phone-error";

    if (!phone.value) {
      setError(id, "Phone number is required");
      return false;
    } else if (phone.value.length != 10) {
      setError(id, "Invalid phone number");
      return false;
    } else {
      setSuccess(id);
    }
  }

  function checkPasswordInput() {
    const id = "password-error";

    if (!password.value) {
      setError(id, "Password is required");
      return false;
    } else if (password.value.length < 8) {
      setError(id, "Password should be minimum 8 characters");
      return false;
    } else {
      setSuccess(id);
    }
  }

  function setSuccess(id) {
    const element = document.getElementById(id);
    element.innerHTML = "";
    element.classList.add("hidden");
  }

  function setError(id, errorMessage) {
    const element = document.getElementById(id);
    element.innerHTML = errorMessage;
    element.classList.remove("hidden");
  }

  function submitForm() {
    alert("form validated successfully");
  }
})();
