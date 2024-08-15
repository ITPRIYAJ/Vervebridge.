document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    // Display a confirmation message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Appointment booked for ${name} on ${date} at ${time}. We will send a confirmation to ${email}.`;
    messageDiv.style.color = '#4682b4';
});
