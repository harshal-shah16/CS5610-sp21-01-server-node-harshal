const quizzes = require("./quizzes.json")

//const quizzesModel = require("../../db/quizzes/quizzes-model")

const createQuiz = () => {}
const findAllQuizzes = () => quizzes
//{
 //   return quizzesModel.find()
    // return quizzes
//}
const findQuizById = (qid) => {
    return quizzes.find((quiz) => {
        return (quiz._id === qid)
    })
}

    // return quizzesModel
    //     .findById(qid)
    //     .populate("questions")
    //     .exec()
    
//const updateQuiz = () => {}
//const deleteQuiz = () => {}

module.exports = {
    //createQuiz,
    findAllQuizzes, findQuizById,
    //updateQuiz, deleteQuiz
}