function createStars() {
  const starfield = document.getElementById('starfield');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star-decoration';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;
    starfield.appendChild(star);
  }
}

function getCurrentTimestamp() {
  const now = new Date();
  return now.toLocaleString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function updateTimestamps() {
  document.querySelectorAll('.timestamp').forEach(element => {
    const noteTime = new Date(element.dataset.timestamp);
    const diff = Math.floor((new Date() - noteTime) / 1000);
    element.innerHTML = `${diff} detik yang lalu`;
  });
}

function addNote() {
  const input = document.getElementById('noteInput');
  const noteList = document.getElementById('noteList');
  
  if (input.value.trim()) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'col-md-6 mb-3';
    noteDiv.innerHTML = `
      <div class="note-card">
        <div class="timestamp" data-timestamp="${new Date().toISOString()}">
          ${getCurrentTimestamp()}
        </div>
        <p class="mb-0">${input.value}</p>
      </div>
    `;
    noteList.prepend(noteDiv);
    input.value = '';
  }
}

function clearForm() {
  document.getElementById('noteInput').value = '';
}

// Initialize
createStars();
setInterval(updateTimestamps, 1000);
document.getElementById('noteInput').focus();