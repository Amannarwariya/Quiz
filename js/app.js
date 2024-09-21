const questions = [
  {
    qus: "which of the following is a markup language ?",
    a: "HTML",
    b: "CSS",
    c: "javascript",
    d: "PHP",
    correct: "a",
  },
  {
    qus: "which year was javaScript launched ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    qus: "what does CSS stands for ?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopter Terminals Motorboats Lamborginis",
    correct: "b",
  },
];
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const optionInputs = document.querySelectorAll(".options");
const quesBox = document.getElementById("quesBox");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  //console.log(data);
  quesBox.innerText = `${index + 1}) ${data.qus}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      //console.log(input.value);
      //console.log("yes")
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style="text-align:center">
  <h3>Thanks for playing the quiz </h3>
  <h2>${right} / ${total} are correct </h2>
  </div>`;
};
loadQuestion();
