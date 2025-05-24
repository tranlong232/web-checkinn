const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const message = document.getElementById("message");
const sound = document.getElementById("sound");

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

// 5 giây để test nhanh
const delay = 5000; // 5 giây

startBtn.addEventListener("click", () => {
  if (timer) {
    message.textContent = "⏳ Hẹn giờ đã chạy rồi mà!";
    return;
  }
  message.textContent = "✅ Hẹn giờ bắt đầu rồi. Địt Mẹ Mày!";
  timer = setInterval(() => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    sound.play();
    message.textContent = randomMsg;
    message.style.color = getRandomColor();
  }, delay);
});

stopBtn.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    message.textContent = "⏸ Hẹn giờ đã dừng. Ngủ mẹ mày đi!";
    message.style.color = "#333";
  } else {
    message.textContent = "⛔ Chưa có hẹn giờ nào chạy cả!";
  }
});

function getRandomColor() {
  const colors = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71", "#9b59b6", "#1abc9c"];
  return colors[Math.floor(Math.random() * colors.length)];
}
