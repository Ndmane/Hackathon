const apiKey = '1cc1090706fd24d36730bad575fdca7c';

window.onload = function() {
    document.getElementById('city-modal').style.display = 'flex';
    document.body.classList.add('modal-open');
};

function setCity() {
    const city = document.getElementById('city-input').value.trim().toLowerCase();
    if (city) {
        const mapLink = `https://2gis.ru/search/${encodeURIComponent(city)}`;
        document.getElementById('map-link').href = mapLink;

        document.getElementById('city-modal').style.display = 'none';
        document.body.classList.remove('modal-open');

        fetchWeather(city);
    } else {
        alert("Пожалуйста, введите ваш город.");
    }
}

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=ru`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.main && data.wind) {
                const temperature = data.main.temp.toFixed(1);
                const windSpeed = data.wind.speed.toFixed(1);
                document.getElementById('temperature').textContent = temperature;
                document.getElementById('wind-speed').textContent = windSpeed;

                // Определяем состояние погоды
                checkWeatherConditions(temperature, windSpeed);
            } else {
                console.error("Ошибка данных:", data);
                alert("Не удалось получить данные о погоде для указанного города.");
            }
        })
        .catch(error => {
            console.error("Ошибка при загрузке данных о погоде:", error);
            alert("Произошла ошибка при загрузке данных о погоде: " + error.message);
        });
}

function checkWeatherConditions(temperature, windSpeed) {
    const popup = document.getElementById('popup');
    const status = document.getElementById('status');

    // Условия для нормальных и критических погодных условий
    if (temperature > 0 && windSpeed < 15) {
        status.textContent = 'Условия нормальные';
        popup.style.backgroundColor = 'rgba(0, 128, 0, 0.8)'; // Зеленый
    } else {
        status.textContent = 'Критические условия';
        popup.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'; // Красный
    }

    popup.style.display = 'block'; // Показываем всплывающее окно
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    if (sectionId === 'events') {
        loadEvents();
    }
}

// Функция для создания события
document.getElementById('create-event-button').addEventListener('click', () => {
    const eventTitle = prompt("Введите название события:");
    const eventDescription = prompt("Введите описание события:");
    const eventImage = prompt("Введите URL изображения события:");

    if (eventTitle && eventDescription && eventImage) {
        const eventList = document.getElementById('event-list');
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event-item');
        eventDiv.innerHTML = `
            <h3>${eventTitle}</h3>
            <img src="${eventImage}" alt="${eventTitle}" style="width:100%; height:auto;">
            <p>${eventDescription}</p>
            <button onclick="deleteEvent(this)">Удалить событие</button>
        `;
        eventList.appendChild(eventDiv);
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});

// Функция для удаления события
function deleteEvent(button) {
    const eventDiv = button.parentElement;
    eventDiv.remove();
}

// Функция для вызова службы
function callService(serviceName, phoneNumber) {
    const popup = document.createElement('div');
    popup.className = 'modal';
    popup.innerHTML = `
        <div class="modal-content">
            <h2>Вы вызвали ${serviceName}</h2>
            <p>Телефон: ${phoneNumber}</p>
            <button onclick="this.parentElement.parentElement.remove()">Закрыть</button>
        </div>
    `;
    document.body.appendChild(popup);
}
