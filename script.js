let selectedMood = "";
const emojis = document.querySelectorAll('.emoji');

emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    emojis.forEach(e => e.classList.remove('selected'));
    emoji.classList.add('selected');
    selectedMood = emoji.getAttribute('data-mood');
  });
});

document.getElementById('moodForm').addEventListener('submit', function(e) {
  e.preventDefault();

  if (!selectedMood) {
    alert("Bạn chưa chọn tâm trạng!");
    return;
  }

  const name = document.getElementById('name').value;
  const note = document.getElementById('note').value;
  const time = new Date().toLocaleString();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("mood", selectedMood);
  formData.append("note", note);
  formData.append("time", time);

  fetch("https://script.google.com/macros/s/AKfycbyBBlQV5OJDN4J--xS7u_yeWPSsS0TE7gKD9ATt2bZAg1msc1iEuzjgpcVhnboEnTea-g/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById('status').innerText = "✅ Cảm ơn bạn đã chia sẻ!";
    document.getElementById('moodForm').reset();
    emojis.forEach(e => e.classList.remove('selected'));
    selectedMood = "";
  })
  .catch(err => {
    console.error(err);
    document.getElementById('status').innerText = "❌ Gửi thất bại. Vui lòng thử lại.";
  });
});
