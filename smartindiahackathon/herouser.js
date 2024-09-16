// Panic Button
document.getElementById('panic-button').addEventListener('click', () => {
    alert("Panic button pressed! Authorities and volunteers have been notified.");
    // Simulate sending alert to server
});

// Notify Volunteers
document.getElementById('notify-button').addEventListener('click', () => {
    const message = document.getElementById('notify-message').value;
    if (message.trim()) {
        alert("Volunteers have been notified about the following: " + message);
        // Simulate sending notification to server
        document.getElementById('notify-message').value = '';
    } else {
        alert("Please enter a message before notifying volunteers.");
    }
});
