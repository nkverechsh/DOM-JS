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

const students = [
    {
        name: "Глеб",
        color: "#ff2600",
        count: 1,
    },
    {
        name: "Иван",
        color: "№00f900",
        count: 2,
    },
    {
        name: "Петя",
        color: "#0432ff",
        count: 3,
    },
];

const renderStudents = () => {
    const studentsHtml = students.map((student, index) => {
        return  `<section class="all__comment"
                    <li class="student" data-color="${student.color}">
                        <p class="student-name" data-name="${student.name}">
                            ${student.name}, любимый цвет <span style="color: ${student.color}"> ${student.color}</span>
                        </p>
                        <div class="likes">
                            <span id="likeNumber" class="likes-counter" data-counter="${students.count}">111</span>
                            <button id="commentLike" class="like-button -active-like"></button>
                        </div>
                    </li>

                </section>
                <button data-index="${index}" class="delete-button">Удалить</button>`
    }).join("");

    listElement.innerHTML = studentsHtml;

    initEventListeners(); //  обработчик событий на динамические элементы с классом student
    nameEventListeners(); // Приветствуем по имени при нажатии на него
    initDeleteButtonsListeners(); // Удаление элемента
};

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


const initDeleteButtonsListeners = () => {
    const deleteButtonsElements = document.querySelectorAll(".delete-button");

    for (const deleteButtonElement of deleteButtonsElements) {
        deleteButtonElement.addEventListener("click", () => {

// Удаление элемента:
// 1. Храним списов в JS массиве
// 2. При клике удаляем нужный элемент из массива
// 3. На основе нового массива в js формируем html разметку списка

// Реализация удаления элемента по индексу с помощью метода .splice
        const index = deleteButtonElement.dataset.index;
        students.splice(index, 1);
// Рендерим новую разментку после удаления элемента
        renderStudents();
        });
    }
};

    renderStudents();

// Добавление нового элемента

buttonElement.addEventListener("click", () => {
    // Сброс ошибки заполнения формы имени
    nameInputElement.classList.remove("error");
    // Проверка заполнения имени
    if(nameInputElement.value === "") {
        nameInputElement.classList.add("error");
        return;
    }

    students.push({
        name: nameInputElement.value,
        color: colorInputElement.value,
    });

/*
                Убираем данный код, т.к. теперь новый элемент добавляется через .push в массив  
                        listElement.innerHTML = listElement.innerHTML + 
                        `   
                            <li class="student" data-color="${colorInputElement.value}">
                                <p class="student-name" data-name="${nameInputElement.value}">
                                    ${nameInputElement.value}, любимый цвет <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
                                </p>
                                <button class="delete-button">Удалить</button>
                            </li>
                        `;
*/

// При использовании innerHTML обработчики слетают, поэтому снова запускаем функцию обработчика событий каждого элемента после добавления новых элементов
    renderStudents(); // Добавление новой строки в список

// Очистка формы после отправки коммента:
    nameInputElement.value = "";

// После отправки актив курсора в поле имени
    nameInputElement.focus();
});

