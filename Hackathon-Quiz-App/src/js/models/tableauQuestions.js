
var questions = new Array(10);

for (var i = 0; i < questions.length; i++) {
  questions[i] = { contentQuestion: "", contentGoodResponse: "", wrongAnswer: [], questionId:"",responseId:""};
}

console.log("tableau question model",questions)
export const tableauQuestions = questions; 
