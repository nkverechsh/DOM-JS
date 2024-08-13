"use strict"

const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const secondButtonElement = document.getElementById("second-button");
const titleElement = document.getElementById("title");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");

const allElement = document.querySelectorAll("body");

const studentElements = document.querySelectorAll(".student");
const studentNameElements = document.querySelectorAll("student-name");

// Баловство с заголовком
titleElement.addEventListener("click", () => {
    // нам нужно добавить обработчик события на кнопку "добавить" .addEventListener -
    // - данный метод прослушивает события, 1 аргументом принимает (у нас "click"), а 2 аргумент
    // callback ф-ция, которую он вызовет, когда событие произойдёт (у нас это вывод в консоль)
    alert("Не стоило на меня нажимать");
});

// функция добавляет обработчик событий на динамические элементы с классом student (для дальнейшего удаления строки (элемента))
const initEventListeners = () => {
// находит все элементы с классом student в разметке
    const studentElements = document.querySelectorAll(".student");

// проходим циклом for of по каждому элементу в списке
    for(const studentElement of studentElements) {

// добавляет обработчик клика на конкретный элемент в списке
        studentElement.addEventListener("click", () => {

// вешаем обработчик на первый найденный div для окрашивания фона страницы в выбранный цвет
            // const bodyElement = allElement[0];
            // bodyElement.style.backgroundColor = colorInputElement.value;

// обращаемся к свойству "dastaset".color data-атрибута "data-color" в разметке
            console.log(studentElement.dataset.color);
        });
    }
};

initEventListeners();

const nameEventListeners = () => {
    // находит все элементы с классом student в разметке
        const studentNameElements = document.querySelectorAll(".student-name");
    
    // проходим циклом for of по каждому элементу в списке
        for(const studentNameElement of studentNameElements) {
    
    // добавляет обработчик клика на конкретный элемент в списке
            studentNameElement.addEventListener("click", () => {
    
                confirm("Привет, " + studentNameElement.dataset.name);
            });
        }
    };

    nameEventListeners();

const initDeleteButtonsListeners = () => {
    const deleteButtonsElements = document.querySelectorAll(".delete-button");

    for (const deleteButtonElement of deleteButtonsElements) {
        deleteButtonElement.addEventListener("click", () => {
            console.log("Удаляю элемент");

        });
    }
};

    initDeleteButtonsListeners();

buttonElement.addEventListener("click", () => {
    // Сброс ошибки заполнения формы имени
    nameInputElement.classList.remove("error");
    // Проверка заполнения имени
    if(nameInputElement.value === "") {
        nameInputElement.classList.add("error");
        return;
    }

        listElement.innerHTML = listElement.innerHTML + 
        `   
            <li class="student" data-color="${colorInputElement.value}">
                <p class="student-name" data-name="${nameInputElement.value}">
                    ${nameInputElement.value}, любимый цвет <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
                </p>
                <b class="delete-button">Удалить</b>
            </li>
        `;

// При использовании innerHTML обработчики слетают, поэтому снова запускаем функцию обработчика событий каждого элемента после добавления новых элементов
    initEventListeners();
    nameEventListeners();
    initDeleteButtonsListeners();

// Очистка формы после отправки коммента:
    nameInputElement.value = "";

// После отправки актив курсора в поле имени
    nameInputElement.focus();
});


