
let mode = "order";
let quizData = [];
let currentIndex = 0;
let score = 0;
let answered = {};
let lastSettings = { start: 1101, end: 1200, mode: "order" };

const menuEl = document.getElementById("menu");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const wordEl = document.getElementById("word");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const scoreText = document.getElementById("scoreText");

document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    mode = btn.dataset.mode;
  });
});

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("prevBtn").addEventListener("click", prevQuestion);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("restartBtn").addEventListener("click", restartQuiz);
document.getElementById("resetBtn").addEventListener("click", resetToMenu);
document.getElementById("menuBackTop").addEventListener("click", resetToMenu);
document.getElementById("menuBackBottom").addEventListener("click", resetToMenu);
document.getElementById("restartFromResult").addEventListener("click", restartQuiz);
document.getElementById("resetFromResult").addEventListener("click", resetToMenu);
document.getElementById("menuFromResult").addEventListener("click", resetToMenu);
document.getElementById("speakBtn").addEventListener("click", speakWord);

function startQuiz() {
  const start = Number(startInput.value);
  const end = Number(endInput.value);

  if (Number.isNaN(start) || Number.isNaN(end) || start > end) {
    alert("開始番号と終了番号を正しく入力してください。");
    return;
  }

  quizData = data.filter(item => item.id >= start && item.id <= end);

  if (quizData.length === 0) {
    alert("その範囲のデータがありません。");
    return;
  }

  if (mode === "random") {
    quizData = [...quizData].sort(() => Math.random() - 0.5);
  } else {
    quizData = [...quizData].sort((a, b) => a.id - b.id);
  }

  lastSettings = { start, end, mode };
  currentIndex = 0;
  score = 0;
  answered = {};

  menuEl.classList.add("hidden");
  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const q = quizData[currentIndex];
  const progress = ((currentIndex + 1) / quizData.length) * 100;

  progressText.textContent = `${currentIndex + 1} / ${quizData.length}（No.${q.id}）`;
  progressFill.style.width = `${progress}%`;
  wordEl.textContent = q.word;

  choicesEl.innerHTML = "";
  feedbackEl.className = "feedback hidden";
  feedbackEl.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.disabled = Boolean(answered[q.id]);
    btn.addEventListener("click", () => answerQuestion(index));
    choicesEl.appendChild(btn);
  });

  if (answered[q.id]) {
    reflectAnsweredState(q, answered[q.id]);
  }

  document.getElementById("prevBtn").disabled = currentIndex === 0;
  document.getElementById("nextBtn").textContent = currentIndex === quizData.length - 1 ? "結果を見る" : "次へ";
}

function answerQuestion(selectedIndex) {
  const q = quizData[currentIndex];
  if (answered[q.id]) return;

  const isCorrect = selectedIndex === q.correct;
  if (isCorrect) score += 1;

  answered[q.id] = { selectedIndex, isCorrect };
  reflectAnsweredState(q, answered[q.id]);
}

function reflectAnsweredState(q, state) {
  const buttons = choicesEl.querySelectorAll(".choice-btn");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    if (i === state.selectedIndex && !state.isCorrect) btn.classList.add("wrong");
  });

  feedbackEl.className = `feedback ${state.isCorrect ? "ok" : "ng"}`;
  feedbackEl.classList.remove("hidden");
  feedbackEl.innerHTML = `
    <strong>${state.isCorrect ? "⭕ 正解" : "❌ 不正解"}</strong><br>
    正解：${q.choices[q.correct]}
    <div class="example-block">
      <div><strong>例文</strong>：${escapeHtml(q.sentence)}</div>
      <div><strong>和訳</strong>：${escapeHtml(q.jp)}</div>
    </div>
  `;
}

function nextQuestion() {
  if (currentIndex === quizData.length - 1) {
    showResult();
    return;
  }
  currentIndex += 1;
  renderQuestion();
}

function prevQuestion() {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  renderQuestion();
}

function showResult() {
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreText.textContent = `得点：${score} / ${quizData.length}`;
}

function restartQuiz() {
  if (!lastSettings) return;
  startInput.value = lastSettings.start;
  endInput.value = lastSettings.end;
  mode = lastSettings.mode;
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  startQuiz();
}

function resetToMenu() {
  quizEl.classList.add("hidden");
  resultEl.classList.add("hidden");
  menuEl.classList.remove("hidden");
}

function speakWord() {
  if (!quizData.length) return;
  const text = quizData[currentIndex].word;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
