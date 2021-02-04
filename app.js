const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", (e) => {
  e.preventDefault()  
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;
  console.log(valor);
});
