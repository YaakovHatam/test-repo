var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: '***',
    consumer_secret: '***',
    access_token_key: '****-****',
    access_token_secret: '*****'
});

var params = { q: 'ברק רביד' };
client.get('users/search', params, function (error, tweets, response) {
    if (!error) {
        const data = tweets.filter(acc => acc.verified === true).map(acc => acc.screen_name);
        console.log(data);
        // screen_name
        // verified
    }
});