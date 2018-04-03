const request = require('request');
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
        res.json(body);
    })
};