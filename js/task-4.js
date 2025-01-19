const form = document.querySelector(".login-form");
form.addEventListener("submit", function (even) {
  even.preventDefault();
  const formData = {};
  let allFieldsFilled = true;

  for (let element of form.elements) {
    if (element.tagName === "INPUT") {
      const value = element.value.trim();
      if (!value) {
        allFieldsFilled = false;
        break;
      }
      formData[element.name] = value;
    }
  }

  if (!allFieldsFilled) {
    alert("All form fields must be filled in");
  } else {
    console.log(formData);
    form.reset();
  }
});
