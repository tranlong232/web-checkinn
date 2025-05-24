let selectedMood = "";
const emojis = document.querySelectorAll('.emoji');

// Đảm bảo sự kiện click hoạt động trên các biểu cảm
emojis.forEach(emoji => {
  emoji.addEventListener('click', () => {
    // Reset trạng thái của tất cả biểu cảm
    emojis.forEach(e => e.classList.remove('selected'));
    // Gán trạng thái đã chọn cho biểu cảm được nhấn
    emoji.classList.add('selected');
    selectedMood = emoji.getAttribute('data-mood');
  });
});

document.getElementById('moodForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Kiểm tra xem người dùng đã chọn biểu cảm chưa
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

  // Gửi dữ liệu đến Google Apps Script
  fetch("https://script.google.com/macros/s/AKfycbyBBlQV5OJDN4J--xS7u_yeWPSsS0TE7gKD9ATt2bZAg1msc1iEuzjgpcVhnboEnTea-g/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    // Hiển thị thông báo cảm ơn sau khi gửi thành công
    alert("✅ Cảm ơn bạn đã chia sẻ!");
    document.getElementById('moodForm').reset();
    emojis.forEach(e => e.classList.remove('selected'));
    selectedMood = "";
  })
  .catch(err => {
    console.error(err);
    alert("❌ Gửi thất bại. Vui lòng thử lại.");
  });
});