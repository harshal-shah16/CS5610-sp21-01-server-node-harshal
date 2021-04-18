
const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)
const findQuestionsForQuiz = (qzid) => { 
                     return questionsModel.find( {quizId:qzid})
                     
                     
                     // if (err){
                     //        console.log(err);
                     // }
                     // else{
                     //        //console.log("Result : ", docs);
                     //        return docs;
                     // }
                     // });
                     // const questions = questionsModel.find(qzid)
                     // .populate('questions').then(quiz => quiz.questions)
}
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }

