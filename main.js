const section = document.createElement("section")
const h1 = document.createElement("h1");
const sectionForm = document.createElement("section");
const form = document.createElement("form");
const label = document.createElement("label");
const input = document.createElement("input");
const divContainBtns = document.createElement("div");
const btnSubmit = document.createElement("button");
const btnClear = document.createElement("button");
const sectionList = document.createElement("section");

document.querySelector("body").appendChild(section);
section.appendChild(h1);
section.appendChild(sectionForm);
section.appendChild(sectionList);
sectionForm.appendChild(form);
form.appendChild(label);
form.appendChild(input);
form.appendChild(divContainBtns);
divContainBtns.appendChild(btnSubmit);
divContainBtns.appendChild(btnClear);

section.id = "conteinToDoApp"
sectionForm.id = "conteinForm"
sectionList.id = "conteinList"
divContainBtns.id = "containBtns"

h1.innerHTML = "ToDo App";
label.innerHTML = "Type a new to-do:";
label.setAttribute("for", "tasks");
input.type = "text";
input.id = "tasks";
input.name = "tasks";
input.placeholder = "Escriba aquí";
btnSubmit.type = "submit";
btnSubmit.innerHTML = "Add";
btnClear.innerHTML = "Clear";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = event.target.tasks.value;
  if (result.trim() !== "") {
    const divList = document.createElement("div");
    const textList = document.createElement("p");
    const imgBtn = document.createElement("img");
    sectionList.appendChild(divList);
    divList.appendChild(textList);
    divList.appendChild(imgBtn);
    textList.innerHTML = result;
    imgBtn.src = "https://img.icons8.com/?size=24&id=BsNkc7jnuBPU&format=png";
    imgBtn.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  }
  form.reset();
});

btnClear.addEventListener("click", () => {
  sectionList.innerHTML = "";
});
