const request = require('request');
const db = require('../../models');
// export the function
module.exports = (req, res) => {
    request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
            'api-key': "c3d359d720384d3da7fa38b1f7ea72ee"
        },
        }, function(err, response, body) {
        if(err){
            console.error(err)
        }
        body = JSON.parse(body);
        res.json(body);
    })
};