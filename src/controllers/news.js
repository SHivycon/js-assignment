const News = require('../models/news');

const createNews = async (payload) => {
    try {
        if(!payload || !Object.keys(payload).length || !payload.title || !payload.description || !payload.createdFor || !payload.createdForId) 
            throw new Error('Missing required parameter(s)');

        return await News.createNews(payload);
    } catch(error) {
        throw new Error((error && error.message) ? error.message : 'Unexpected error!');
    }
}

const getNewsByMatchId = async (id) => {
    try {
        if(!id) 
            throw new Error('Missing required parameter: match id');

        const res = await News.getNewsByMatchId(id);
        if(!res || !Array.isArray(res) || !res.length)
            return { error: 0, data: res, message: 'No data found' }
        return res;
    } catch(error) {
        throw new Error((error && error.message) ? error.message : 'Unexpected error!');
    }
}

const getNewsByTourId = async (id) => {
    try {
        if(!id) 
            throw new Error('Missing required parameter: tour id');

        const res = await News.getNewsByTourId(id);
        if(!res || !Array.isArray(res) || !res.length)
            return { error: 0, data: res, message: 'No data found' }
        return res;
        
    } catch(error) {
        throw new Error((error && error.message) ? error.message : 'Unexpected error!');
    }

}
const getNewsBySportId = async (id) => {
    try {
        if(!id) 
            throw new Error('Missing required parameter: sport id');

        const res = await News.getNewsBySportId(id);
        if(!res || !Array.isArray(res) || !res.length)
            return { error: 0, data: res, message: 'No data found' }
        return res;

    } catch(error) {
        throw new Error((error && error.message) ? error.message : 'Unexpected error!');
    }

}


module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}