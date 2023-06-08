const mysql = require('../lib/mysql');

const createNews = async (data) => {
    const {createdFor, createdForId} = data;
    let keystring = 'title, description, ';
    let id;
    if(createdFor && createdForId) {
        if(createdFor === 'match') {
            keystring += 'matchId'
            id = createdForId;    
        }
        else {
            keystring += 'tourId'
            id = createdForId;
        }
    }

    const statement = 'insert into news ('+keystring+') values (?, ?, ?);';
    const parameters = [data.title, data.description, id];
    console.log(statement +'.......'+parameters)
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async (matchId) => {
    const statement = 'select title, description from news where matchId = ?';
    const parameters = [ matchId ];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async (tourId) => {
    const statement = '(select title, description from news where tourId = ? ) '
                    + 'UNION '
                    + '(select nw.title, nw.description from news nw inner join matches ms on ms.id = nw.matchId and ms.tourId = ? )';
    const parameters = [ tourId, tourId ];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async (sportId) => {
    const statement = '(select nw.title, nw.description from news nw inner join tours ts on nw.tourId = ts.id and ts.sportId = ? ) '
                    + 'UNION '
                    + '(select nw.title, nw.description from news nw inner join matches ms on ms.id = nw.matchId and ms.tourId IN (select id from tours where sportId = ?) )';
    const parameters = [ sportId, sportId ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}