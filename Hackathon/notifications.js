const notificationsData = [
    { title: "Ремонт дороги", description: "Улица Ленина, с 1 по 5 ноября" },
    { title: "Отключение воды", description: "Улица Пушкина, 3 ноября с 10:00 до 15:00" },
];

document.addEventListener("DOMContentLoaded", () => {
    const notificationsList = document.getElementById("notifications-list");
    notificationsData.forEach(notification => {
        const notificationDiv = document.createElement("div");
        notificationDiv.className = "notification-item";
        notificationDiv.innerHTML = `<strong>${notification.title}</strong>: ${notification.description}`;
        notificationsList.appendChild(notificationDiv);
    });
});
