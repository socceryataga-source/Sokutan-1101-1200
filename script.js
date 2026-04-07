let mode = "order";
let fullQuiz = [];
let currentIndex = 0;
let score = 0;
let answeredMap = new Map();
let lastSettings = { start: 1101, end: 1200, mode: "order" };

const menuView = document.getElementById("menuView");
const quizView = document.getElementById("quizView");
const resultView = document.getElementById("resultView");
const startInput = document.getElementById("startNum");
const endInput = document.getElementById("endNum");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const wordText = document.getElementById("wordText");
const choicesBox = document.getElementById("choices");
const feedbackBox = document.getElementById("feedback");
const resultText = document.getElementById("resultText");

document.getElementById("orderBtn").addEventListener("click", () => setMode("order"));
document.getElementById("randomBtn").addEventListener("click", () => setMode("random"));
document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("prevBtn").addEventListener("click", prevQuestion);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("menuBtn").addEventListener("click", goMenu);
document.getElementById("restartBtn").addEventListener("click", restartSameSettings);
document.getElementById("resetRangeBtn").addEventListener("click", resetRange);
document.getElementById("resultRestartBtn").addEventListener("click", restartSameSettings);
document.getElementById("resultResetRangeBtn").addEventListener("click", resetRange);
document.getElementById("resultMenuBtn").addEventListener("click", goMenu);
document.getElementById("speakBtn").addEventListener("click", speakWord);

function setMode(nextMode){
  mode = nextMode;
  document.getElementById("orderBtn").classList.toggle("active", nextMode === "order");
  document.getElementById("randomBtn").classList.toggle("active", nextMode === "random");
}

function startQuiz(){
  const start = Number(startInput.value);
  const end = Number(endInput.value);

  if(Number.isNaN(start) || Number.isNaN(end) || start > end){
    alert("開始番号と終了番号を正しく入力してください。");
    return;
  }

  const pool = quizData.filter(item => item.id >= start && item.id <= end);
  if(pool.length === 0){
    alert("その範囲にはデータがありません。");
    return;
  }

  lastSettings = { start, end, mode };
  fullQuiz = [...pool];
  if(mode === "random"){
    shuffle(fullQuiz);
  }
  currentIndex = 0;
  score = 0;
  answeredMap = new Map();

  menuView.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion(){
  const item = fullQuiz[currentIndex];
  progressText.textContent = `${currentIndex + 1} / ${fullQuiz.length}`;
  scoreText.textContent = `得点 ${score}`;
  wordText.textContent = item.word;
  feedbackBox.classList.add("hidden");
  feedbackBox.innerHTML = "";

  choicesBox.innerHTML = "";
  const saved = answeredMap.get(item.id);

  item.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = choice;
    if(saved){
      btn.disabled = true;
      if(index === item.correct){
        btn.classList.add("correct");
      }
      if(index === saved.selected && saved.selected !== item.correct){
        btn.classList.add("wrong");
      }
    } else {
      btn.addEventListener("click", () => answerQuestion(index));
    }
    choicesBox.appendChild(btn);
  });

  if(saved){
    showFeedback(saved.correct, item);
  }
}

function answerQuestion(selectedIndex){
  const item = fullQuiz[currentIndex];
  if(answeredMap.has(item.id)) return;

  const correct = selectedIndex === item.correct;
  answeredMap.set(item.id, { selected: selectedIndex, correct });

  if(correct) score += 1;

  renderQuestion();
}

function showFeedback(isCorrect, item){
  feedbackBox.classList.remove("hidden");
  feedbackBox.innerHTML = `
    <div class="feedback-status">${isCorrect ? "⭕ 正解" : "❌ 不正解"}</div>
    <div class="feedback-answer">正解：${item.choices[item.correct]}</div>
    <div>${item.sentence}</div>
    <div>${item.jp}</div>
  `;
  scoreText.textContent = `得点 ${score}`;
}

function prevQuestion(){
  if(currentIndex > 0){
    currentIndex -= 1;
    renderQuestion();
  }
}

function nextQuestion(){
  if(currentIndex < fullQuiz.length - 1){
    currentIndex += 1;
    renderQuestion();
    return;
  }
  showResult();
}

function showResult(){
  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");
  resultText.textContent = `${fullQuiz.length}問中 ${score}問正解でした。`;
}

function restartSameSettings(){
  startInput.value = lastSettings.start;
  endInput.value = lastSettings.end;
  setMode(lastSettings.mode);
  startQuiz();
}

function resetRange(){
  quizView.classList.add("hidden");
  resultView.classList.add("hidden");
  menuView.classList.remove("hidden");
}

function goMenu(){
  quizView.classList.add("hidden");
  resultView.classList.add("hidden");
  menuView.classList.remove("hidden");
}

function speakWord(){
  if(!fullQuiz.length) return;
  const utterance = new SpeechSynthesisUtterance(fullQuiz[currentIndex].word);
  utterance.lang = "en-US";
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
