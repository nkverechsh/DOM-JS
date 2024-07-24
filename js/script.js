"use strict"

const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const secondButtonElement = document.getElementById("second-button");
const titleElement = document.getElementById("title");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");
const allElement = document.querySelectorAll("body");

const studentElements = document.querySelectorAll(".student");

// функция добавляет обработчик событий на динамические элементы (для дальнейшего удаления строки (элемента))
const initEventListeners = () => {
// находит все элементы с классом student в разметке
    const studentElements = document.querySelectorAll(".student");

// проходим циклом for of по каждому элементу в списке
    for(const studentElement of studentElements) {

// добавляет обработчик клика на конкретный элемент в списке
        studentElement.addEventListener("click", () => {
// вешаем обработчик на первый найденный div
            const bodyElement = allElement[0];
            bodyElement.style.backgroundColor = colorInputElement.value;
            
            console.log(studentElement.innerHTML);
        });
    }
};

initEventListeners();

titleElement.addEventListener("click", () => {
    // нам нужно добавить обработчик события на кнопку "добавить" .addEventListener -
    // - данный метод прослушивает события, 1 аргументом принимает (у нас "click"), а 2 аргумент
    // callback ф-ция, которую он вызовет, когда событие произойдёт (у нас это вывод в консоль)
    alert("Не стоило на меня нажимать");
});

buttonElement.addEventListener("click", () => {
    // Сброс ошибки заполнения формы имени
    nameInputElement.classList.remove("error");
    // Проверка заполнения имени
    if(nameInputElement.value === "") {
        nameInputElement.classList.add("error");
        return;
    }

    // const oldList = listElement.innerHTML;

        listElement.innerHTML = listElement.innerHTML + 
        `
            <li class="student">
                <p class="student-name">
                    ${nameInputElement.value}, любимый цвет <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
                </p>
            </li>
        `;

// При использовании innerHTML обработчики слетают, поэтому снова запускаем функцию обработчика событий каждого элемента после добавления новых элементов
    initEventListeners();

// Очистка формы после отправки коммента:
    nameInputElement.value = "";
});

