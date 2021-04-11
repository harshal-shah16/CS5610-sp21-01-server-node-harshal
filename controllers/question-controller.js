module.exports = (app) => {
    const questionService = require("../services/questions-service")

    const findAllQuestions = async (req, res) => {
        // const questions = questionService.findAllQuestions()
        // res.send(questions)
        const questions = await questionService.findAllQuestions();
        res.json(questions);
    }

    const findQuestionsForQuiz = async (req, res) => {
        const quizId = req.params.qid;
        // const questions = questionService.findQuestionsForQuiz(quizId);
        // res.send(questions);
        const questions = await questionService.findQuestionsForQuiz(quizId)
        res.json(questions);
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
}