const questions = [
  "지금 내 감정에 이름을 붙일 수 있다.",
  "상대의 말보다 내 몸의 긴장을 먼저 알아차리고 있다.",
  "바로 반응하기 전에 한 번 숨을 고를 수 있다.",
  "지금 내가 원하는 결과가 무엇인지 알고 있다.",
  "불편함이 올라와도 즉시 방어하지 않고 머물 수 있다.",
  "내가 통제할 수 있는 것과 없는 것을 구분하고 있다.",
  "지금 이 선택이 나를 더 선명하게 만드는지 느껴진다.",
  "습관 때문에가 아니라 의도 때문에 움직이고 있다.",
  "내 말투와 표정을 스스로 조절할 여유가 있다.",
  "상황을 탓하기보다 내가 취할 다음 행동을 보고 있다.",
  "지금의 결정이 내 가치와 연결되어 있다.",
  "잠깐 멈추면 더 나은 답을 고를 수 있다고 느낀다.",
  "상대의 반응과 별개로 내 중심을 유지하고 있다.",
  "불안해도 자동으로 도망치거나 밀어붙이지 않는다.",
  "지금 이 순간에도 선택권이 남아 있다고 느낀다.",
  "내가 왜 이 행동을 하려는지 설명할 수 있다.",
  "익숙한 패턴보다 더 의식적인 방향을 고르고 있다.",
  "지금의 나는 충동보다 방향에 가깝다."
];

const results = [
  {
    min: 0,
    max: 6,
    badge: "자동반응 상태",
    title: "지금은 자동반응이 앞서고 있습니다.",
    message: "몸과 감정이 먼저 움직이고 있어서 선택의 여지가 좁게 느껴질 수 있습니다. 잘못된 상태라기보다, 잠시 멈춤이 더 필요한 구간입니다.",
    core: "지금 필요한 것은 정답이 아니라, 반응과 나를 잠깐 분리하는 여백입니다.",
    question: "지금 당장 바꾸려 하지 말고, 단 10초만 멈춘다면 무엇이 먼저 보일까요?"
  },
  {
    min: 7,
    max: 12,
    badge: "혼합 상태",
    title: "반응과 선택이 함께 존재하는 상태입니다.",
    message: "이미 일부는 깨어 있고 일부는 습관적으로 움직이고 있습니다. 이 구간에서는 작은 자각 하나가 전체 흐름을 바꾸는 힘이 됩니다.",
    core: "나는 자동으로 끌려가지 않으면서도, 아직 더 선명하게 선택할 수 있습니다.",
    question: "지금 이 상황에서 내가 한 단계 더 의식적으로 고를 수 있는 행동은 무엇일까요?"
  },
  {
    min: 13,
    max: 18,
    badge: "선택 상태 진입",
    title: "선택 중심의 상태에 들어와 있습니다.",
    message: "감정과 상황을 느끼면서도 거기에 완전히 휩쓸리지 않고 있습니다. 지금의 선택은 방향을 만들고, 그 방향이 하루의 질을 바꿉니다.",
    core: "나는 반응을 넘어서, 지금 이 순간의 방향을 직접 고를 수 있습니다.",
    question: "이 선택 상태를 다음 한 시간 동안 유지하려면 무엇을 계속하고 무엇을 내려놓아야 할까요?"
  }
];

let currentIndex = 0;
let yesCount = 0;

const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const progressFill = document.getElementById("progressFill");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const questionView = document.getElementById("questionView");
const resultView = document.getElementById("resultView");
const resultBadge = document.getElementById("resultBadge");
const resultTitle = document.getElementById("resultTitle");
const resultScore = document.getElementById("resultScore");
const resultMessage = document.getElementById("resultMessage");
const coreSentence = document.getElementById("coreSentence");
const finalQuestion = document.getElementById("finalQuestion");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const resetButton = document.getElementById("resetButton");

function updateProgress() {
  const currentStep = Math.min(currentIndex + 1, questions.length);
  const progress = (currentIndex / questions.length) * 100;

  progressText.textContent = currentIndex < questions.length
    ? `${currentStep} / ${questions.length}`
    : `${questions.length} / ${questions.length}`;
  scoreText.textContent = `YES ${yesCount}개`;
  progressFill.style.width = `${progress}%`;
}

function renderQuestion() {
  updateProgress();
  questionNumber.textContent = `문항 ${currentIndex + 1}`;
  questionText.textContent = questions[currentIndex];
}

function getResult(score) {
  return results.find((item) => score >= item.min && score <= item.max);
}

function showResult() {
  updateProgress();
  progressFill.style.width = "100%";

  const result = getResult(yesCount);
  resultBadge.textContent = result.badge;
  resultTitle.textContent = result.title;
  resultScore.textContent = `총 ${questions.length}문항 중 YES ${yesCount}개`;
  resultMessage.textContent = result.message;
  coreSentence.textContent = result.core;
  finalQuestion.textContent = result.question;

  questionView.classList.add("hidden");
  resultView.classList.remove("hidden");
}

function answerQuestion(answerYes) {
  if (answerYes) {
    yesCount += 1;
  }

  currentIndex += 1;

  if (currentIndex >= questions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function resetChecklist() {
  currentIndex = 0;
  yesCount = 0;
  resultView.classList.add("hidden");
  questionView.classList.remove("hidden");
  renderQuestion();
}

yesButton.addEventListener("click", () => answerQuestion(true));
noButton.addEventListener("click", () => answerQuestion(false));
resetButton.addEventListener("click", resetChecklist);

renderQuestion();
