// Пример списка событий
const eventsData = [
    { title: "Концерт группы", description: "Сегодня в 19:00 на площади" },
    { title: "Фестиваль еды", description: "На выходных в парке" },
];

// Загрузка событий на страницу
document.addEventListener("DOMContentLoaded", () => {
    const eventsList = document.getElementById("events-list");
    const addEventButton = document.getElementById("add-event-button");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("close-modal");
    const addEventOkButton = document.getElementById("add-event-ok");
    
    // Функция для обновления списка событий
    function displayEvents() {
        eventsList.innerHTML = ""; // Очищаем список
        eventsData.forEach(event => {
            const eventDiv = document.createElement("div");
            eventDiv.className = "event-item";
            eventDiv.innerHTML = `<strong>${event.title}</strong>: ${event.description}`;
            eventsList.appendChild(eventDiv);
        });
    }

    // Показать модальное окно
    addEventButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Скрыть модальное окно
    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Добавление события
    addEventOkButton.addEventListener("click", () => {
        const eventTitle = document.getElementById("event-title").value;
        const eventDescription = document.getElementById("event-description").value;

        if (eventTitle && eventDescription) {
            eventsData.push({ title: eventTitle, description: eventDescription });
            displayEvents(); // Обновляем список событий
            modal.style.display = "none"; // Скрываем модальное окно
        } else {
            alert("Пожалуйста, заполните оба поля.");
        }
    });

    // Изначальная загрузка событий
    displayEvents();
});
