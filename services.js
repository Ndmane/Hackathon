const servicesData = [
    { name: "Поликлиника №1", contact: "+123456789" },
    { name: "Спортивный центр", contact: "+987654321" },
];

document.addEventListener("DOMContentLoaded", () => {
    const servicesList = document.getElementById("services-list");
    servicesData.forEach(service => {
        const serviceDiv = document.createElement("div");
        serviceDiv.className = "service-item";
        serviceDiv.innerHTML = `<strong>${service.name}</strong>: ${service.contact}`;
        servicesList.appendChild(serviceDiv);
    });
});
