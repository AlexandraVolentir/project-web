const Feedback = require('../controller/FeedbackController')

let feedbackApiRoutes = {
    feedback: function(data, res) {
        if(data.method == 'GET') {
            Feedback.getAllFeedbacks(res)
        } else if(data.method == 'POST') {
            Feedback.createNewFeedback(res, JSON.parse(data.body))
        }
    },
    notFound: function(data, res) {
        Feedback.notFound(res)
    }
}

module.exports = feedbackApiRoutes