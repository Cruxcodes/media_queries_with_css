let inputs = document.querySelectorAll("form input");
let errors = document.querySelectorAll("form .error");
let submit = document.querySelector("button");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((item, index) => {
    if (item.value == "") {
      inputs[2].placeholder = "email@example/com";
      inputs[2].classList.add('placeholder')

      inputs[index].classList.add("input_error");
      errors[index].style.display = "block";
    } else {
      errors[index].style.display = "none";
      inputs[index].classList.remove("input_error");
    }
  });
});
