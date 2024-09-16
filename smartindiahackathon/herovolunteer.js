// Simulated data to demonstrate alert reception
const alertsBox = document.getElementById('alerts-box');
const notificationsBox = document.getElementById('notifications-box');

// Simulate receiving alerts
setInterval(() => {
    const newAlert = document.createElement('p');
    newAlert.textContent = "New emergency alert from a user!";
    newAlert.style.color = "#ff4d73";
    alertsBox.appendChild(newAlert);
}, 5000); // Alert every 5 seconds for demo

// Simulate receiving notifications
setInterval(() => {
    const newNotification = document.createElement('p');
    newNotification.textContent = "User notified: Suspicious activity in area.";
    newNotification.style.color = "#ff6f91";
    notificationsBox.appendChild(newNotification);
}, 7000); // Notification every 7 seconds for demo
