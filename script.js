// Access the user's webcam
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureBtn = document.getElementById('captureBtn');
const submitAttendance = document.getElementById('submitAttendance');

// Access webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("Error accessing webcam: ", err);
  });

// Capture Image
captureBtn.addEventListener('click', () => {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.style.display = 'block';
});

// Submit attendance (send image to backend)
submitAttendance.addEventListener('click', () => {
  const dataUrl = canvas.toDataURL('image/png');
  fetch('/submitAttendance', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: dataUrl })
  })
  .then(response => response.json())
  .then(data => {
    alert('Attendance submitted successfully!');
  })
  .catch(err => {
    console.error('Error submitting attendance:', err);
  });
});
