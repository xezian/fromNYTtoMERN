const request = require('request');
const db = require("../../models");

// export the function
module.exports = (req, res) => {
    let qObj = {
        'api-key': 'c3d359d720384d3da7fa38b1f7ea72ee',
        'fl': 'web_url, snippet, byline, headline',
    };
    if(req.body.topic!=''){
        qObj.q = req.body.topic
    };
    if(req.body.startDate!=''){
        qObj.begin_date = req.body.startDate
    };
    if(req.body.endDate!=''){
        qObj.end_date = req.body.endDate
    };
    request.get({
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        qs: qObj,
        }, function(err, response, body) {
        if(err){
            console.error(err)
        }
        body = JSON.parse(body);
        let count = 0;
        body.response.docs.forEach(article => {
            count++;
            const author = article.byline?article.byline.original:article.source?article.source:"no author listed";
            const synopsis = article.snippet&&article.snippet!=''?article.snippit:"no synopsis available"
            const articleObj = {
                title: article.headline.main,
                author: author,
                synopsis: article.snippet,
                url: article.web_url,
            };
            console.log(article);
            // TODO: send article to the db not the front end (stalls the app)
            // db.NewArticle
            //     .create(articleObj)
            //     .then(dbModel => res.json(dbModel))
            //     .catch(err => res.status(422).json(err));
        })
        console.log(count);
    })
};