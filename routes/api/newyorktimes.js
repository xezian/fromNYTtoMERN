const request = require('request');
// export the function
module.exports = (req, res) => {
    request.get({
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        qs: {
            'api-key': 'c3d359d720384d3da7fa38b1f7ea72ee',
            'q': req.body.topic,
            'begin_date': req.body.startDate,
            'end_date': req.body.endDate,
        },
        }, function(err, response, body) {
        if(err){
            console.error(err)
        }
        body = JSON.parse(body);
        res.json(body);
    })
};