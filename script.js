const menuScreen = document.getElementById('menuScreen');
const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

const startNoInput = document.getElementById('startNo');
const endNoInput = document.getElementById('endNo');
const startBtn = document.getElementById('startBtn');

const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const scoreNow = document.getElementById('scoreNow');
const questionNo = document.getElementById('questionNo');
const wordText = document.getElementById('wordText');
const exampleSentence = document.getElementById('exampleSentence');
const exampleTranslation = document.getElementById('exampleTranslation');
const choicesBox = document.getElementById('choices');
const feedbackBox = document.getElementById('feedback');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const menuBtn = document.getElementById('menuBtn');
const speakBtn = document.getElementById('speakBtn');

const resultSummary = document.getElementById('resultSummary');
const retryBtn = document.getElementById('retryBtn');
const resultMenuBtn = document.getElementById('resultMenuBtn');

let currentSet = [];
let currentIndex = 0;
let userAnswers = [];
let lastSettings = null;

function showScreen(screen) {
  [menuScreen, quizScreen, resultScreen].forEach(el => el.classList.add('hidden'));
  screen.classList.remove('hidden');
}

function getOrderMode() {
  return document.querySelector('input[name="orderMode"]:checked').value;
}

function shuffle(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function buildQuestionSet() {
  const start = Number(startNoInput.value);
  const end = Number(endNoInput.value);
  const orderMode = getOrderMode();

  if (Number.isNaN(start) || Number.isNaN(end)) {
    alert('開始番号と終了番号を入力してください。');
    return null;
  }

  if (start > end) {
    alert('開始番号は終了番号以下にしてください。');
    return null;
  }

  const filtered = quizData.filter(item => item.no >= start && item.no <= end);

  if (filtered.length === 0) {
    alert('その範囲にはデータがありません。');
    return null;
  }

  const questionSet = orderMode === 'random' ? shuffle(filtered) : [...filtered];

  lastSettings = { start, end, orderMode };
  return questionSet;
}

function startQuiz(useLastSettings = false) {
  let questionSet = null;

  if (useLastSettings && lastSettings) {
    startNoInput.value = lastSettings.start;
    endNoInput.value = lastSettings.end;
    const radio = document.querySelector(`input[name="orderMode"][value="${lastSettings.orderMode}"]`);
    if (radio) radio.checked = true;
    questionSet = buildQuestionSet();
  } else {
    questionSet = buildQuestionSet();
  }

  if (!questionSet) return;

  currentSet = questionSet;
  currentIndex = 0;
  userAnswers = currentSet.map(() => null);

  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const item = currentSet[currentIndex];
  if (!item) return;

  const answer = userAnswers[currentIndex];
  const answered = answer !== null;

  questionNo.textContent = item.no;
  wordText.textContent = item.word;
  exampleSentence.textContent = item.sentence;
  exampleTranslation.textContent = item.translation;

  progressText.textContent = `${currentIndex + 1} / ${currentSet.length}`;
  progressBar.style.width = `${((currentIndex + 1) / currentSet.length) * 100}%`;
  scoreNow.textContent = String(calculateScore());

  choicesBox.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];

  item.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-btn';
    button.innerHTML = `<span class="choice-label">${labels[index]}.</span><span>${choice}</span>`;

    if (answered) {
      if (choice === item.meaning) {
        button.classList.add('correct');
      } else if (choice === answer) {
        button.classList.add('wrong');
      }
      button.disabled = true;
    } else {
      button.addEventListener('click', () => handleAnswer(choice));
    }

    choicesBox.appendChild(button);
  });

  if (!answered) {
    feedbackBox.className = 'feedback';
    feedbackBox.innerHTML = 'まだ解答していません。';
  } else {
    updateFeedback(item, answer);
  }

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === currentSet.length - 1 ? '結果へ' : '次へ';
}

function handleAnswer(selectedChoice) {
  if (userAnswers[currentIndex] !== null) return;

  userAnswers[currentIndex] = selectedChoice;
  renderQuestion();
}

function updateFeedback(item, answer) {
  const isCorrect = answer === item.meaning;
  feedbackBox.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
  feedbackBox.innerHTML = isCorrect
    ? `正解です。<strong>${item.word}</strong> = <strong>${item.meaning}</strong>`
    : `不正解です。正解は <strong>${item.meaning}</strong> です。`;
  scoreNow.textContent = String(calculateScore());
}

function calculateScore() {
  return userAnswers.reduce((sum, answer, index) => {
    if (answer !== null && currentSet[index] && answer === currentSet[index].meaning) {
      return sum + 1;
    }
    return sum;
  }, 0);
}

function goNext() {
  if (currentIndex === currentSet.length - 1) {
    showResults();
    return;
  }
  currentIndex += 1;
  renderQuestion();
}

function goPrev() {
  if (currentIndex === 0) return;
  currentIndex -= 1;
  renderQuestion();
}

function showResults() {
  const score = calculateScore();
  const total = currentSet.length;
  const rate = Math.round((score / total) * 100);

  resultSummary.innerHTML = `正解数：<strong>${score}</strong> / ${total}<br>正答率：<strong>${rate}%</strong>`;
  showScreen(resultScreen);
}

function speakCurrentWord() {
  const item = currentSet[currentIndex];
  if (!item || !('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(item.word);
  utterance.lang = 'en-US';
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

startBtn.addEventListener('click', () => startQuiz(false));
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);
restartBtn.addEventListener('click', () => startQuiz(true));
menuBtn.addEventListener('click', () => showScreen(menuScreen));
retryBtn.addEventListener('click', () => startQuiz(true));
resultMenuBtn.addEventListener('click', () => showScreen(menuScreen));
speakBtn.addEventListener('click', speakCurrentWord);

showScreen(menuScreen);
