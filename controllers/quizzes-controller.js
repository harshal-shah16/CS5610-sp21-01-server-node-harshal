const quizzesService = require("../services/quiz-service")

module.exports = (app) => {
    const findAllQuizzes = async (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)
        const quizzes = await quizzesService.findAllQuizzes()
        res.json(quizzes)
    }
    const findQuizById = async (req, res) => {
        const quizId = req.params['qid']
        // const quiz = quizzesService.findQuizById(quizId)
        // res.send(quiz)
        const quiz = await quizzesService.findQuizById(quizId)
        res.json(quiz)
    }

    app.get("/api/quizzes", findAllQuizzes)
    app.get("/api/quizzes/:qid", findQuizById)
}