const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news/create').post(async (req, res, next) => {
        try {
            console.log('BODY >>>> '+JSON.stringify(req.body));
            return res.json(await News.createNews(req.body));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/:id').get(async (req, res, next) => {
        try {
            let {id} = req.params;
            let result = await News.getNewsByMatchId(id);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour/:id').get(async (req, res, next) => {
        try {
            let {id} = req.params;
            let result = await News.getNewsByTourId(id);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport/:id').get(async (req, res, next) => {
        try {
            let {id} = req.params;
            let result = await News.getNewsBySportId(id);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });
}

// 1. News can be created for a match or a tour.