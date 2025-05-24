const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const message = document.getElementById("message");
const countdown = document.getElementById("countdown");
const sound = document.getElementById("sound");

let timer = null;
let countdownTimer = null;
let timeLeft = 5; // Giây test nhanh (5 giây)

// Danh sách câu nói vui
const messages = [
  "🚀 Tạm dừng! Bạn là siêu nhân, nhưng cần sạc năng lượng!",
  "🧘‍♂️ Thư giãn một chút, cuộc sống không chỉ có code!",
  "🎮 Nghỉ giải lao đi, làm ván game nào?",
  "☕ Pha tách cà phê, đừng để trí não quá tải!",
  "🌿 Hít thở sâu và nhìn cây xanh nhé!",
  "🛌 Nằm xuống 5 phút, đừng ngại nghỉ ngơi!",
  "🦸 Bạn mạnh mẽ, nhưng ai cũng cần nghỉ mà!"
];

function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "vi-VN";
  synth.speak(utterance);
}

function startCountdown() {
  clearInterval(countdownTimer);
  timeLeft = 5; // Set lại cho mỗi vòng (5 giây test)
  countdown.textContent = `Đếm ngược: 00:${String(timeLeft).padStart(2, '0')}`;

  countdownTimer = setInterval(() => {
    timeLeft--;
    countdown.textContent = `Đếm ngược: 00:${String(timeLeft).padStart(2, '0')}`;
    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
    }
  }, 1000);
}

startBtn.addEventListener("click", () => {
  if (timer) {
    message.textContent = "⏳ Hẹn giờ đã chạy rồi!";
    return;
  }

  message.textContent = "✅ Hẹn giờ bắt đầu rồi. Cố gắng nhé!";
  startCountdown();

  timer = setInterval(() => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    sound.play();
    message.textContent = randomMsg;
    message.style.color = getRandomColor();
    speak(randomMsg);
    startCountdown();
    confettiEffect();
  }, 5000); // 5 giây test, chỉnh sau

});

stopBtn.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    clearInterval(countdownTimer);
    message.textContent = "⏸ Hẹn giờ đã dừng. Nhớ nghỉ ngơi nha!";
    countdown.textContent = "Đếm ngược: 00:00";
  } else {
    message.textContent = "⛔ Chưa có hẹn giờ nào chạy cả!";
  }
});

function getRandomColor() {
  const colors = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71", "#9b59b6", "#1abc9c"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function confettiEffect() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
