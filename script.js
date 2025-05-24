const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const message = document.getElementById("message");

let timer = null;

const messages = [
  "🚀 Tạm dừng! Bạn là siêu nhân, nhưng cần sạc năng lượng!",
  "🧘‍♂️ Thư giãn một chút, cuộc sống không chỉ có code!",
  "🎮 Nghỉ giải lao đi, làm ván game nào?",
  "☕ Pha tách cà phê, đừng để trí não quá tải!",
  "🌿 Hít thở sâu và nhìn cây xanh nhé!",
  "🛌 Nằm xuống 5 phút, đừng ngại nghỉ ngơi!",
  "🦸 Bạn mạnh mẽ, nhưng ai cũng cần nghỉ mà!"
];

// 30 phút = 1800000ms
// Để test nhanh, chỉnh thành 5000 (5 giây)
const delay = 5000;

startBtn.addEventListener("click", () => {
  if (timer) {
    message.textContent = "⏳ Hẹn giờ đã chạy rồi mà!";
    return;
  }
  message.textContent = "✅ Hẹn giờ bắt đầu rồi. Cố gắng nhé!";
  timer = setInterval(() => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMsg);
    message.textContent = randomMsg;
  }, delay);
});

stopBtn.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    message.textContent = "⏸ Hẹn giờ đã dừng. Nhớ nghỉ ngơi nha!";
  } else {
    message.textContent = "⛔ Chưa có hẹn giờ nào chạy cả!";
  }
});
