const form = document.querySelector("#form");
const nameInput = document.querySelector("#name-input");
const surnameInput = document.querySelector("#surname-input");
const ageInput = document.querySelector("#age-input");
const container = document.querySelector(".container");

let users = []; // пустой массив ,хранит оъекты пользователей

form.addEventListener("submit", function (event) {
  event.preventDefault(); // предотвращает дефортное поведение

  const user = {
    id: Date.now(),
    name: nameInput.value,
    surname: surnameInput.value,
    age: ageInput.value,
  };

  users.push(user);

  rerender();

  console.log(nameInput.value, surnameInput.value, ageInput.value);
  console.log(users);

  nameInput.value = "";
  surnameInput.value = "";
  ageInput.value = "";
});

function rerender() {
  container.innerHTML = "";
  users.forEach((element) => {
    const card = document.createElement("div");
    const name = document.createElement("h2");
    const surname = document.createElement("p");
    const age = document.createElement("p");

    name.innerText = element.name;
    surname.innerText = element.surname;
    age.innerText = element.age;
    card.append(name, surname, age);
    container.append(card);
    card.addEventListener("dblclick", function () {
      const newUsers = users.filter((user) => user.id !== element.id);
      users = newUsers;
      rerender();
    });
  });
}