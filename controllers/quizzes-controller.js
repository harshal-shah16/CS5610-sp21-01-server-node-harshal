
const quizzesService = require('../services/quiz-service');
module.exports = function (app) {
   app.get('/api/quizzes', (req, res) =>
       quizzesService.findAllQuizzes()
           .then(allQuizzes => res.json(allQuizzes)))
   app.get('/api/quizzes/:qzid', (req, res) =>
       quizzesService.findQuizById(req.params['qzid'])
           .then(quiz => res.json(quiz)))
}
















// const quizzesService = require("../services/quiz-service")

// module.exports = (app) => {
//     const findAllQuizzes = async (req, res) => {
//         // const quizzes = quizzesService.findAllQuizzes()
//         // res.send(quizzes)
//         const quizzes = await quizzesService.findAllQuizzes()
//         res.json(quizzes)
//     }
//     const findQuizById = async (req, res) => {
//         const quizId = req.params['qid']
//         // const quiz = quizzesService.findQuizById(quizId)
//         // res.send(quiz)
//         const quiz = await quizzesService.findQuizById(quizId)
//         res.json(quiz)
//     }

//     app.get("/api/quizzes", findAllQuizzes)
//     app.get("/api/quizzes/:qid", findQuizById)
// }