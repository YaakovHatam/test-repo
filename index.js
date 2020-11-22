var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'TjWtd8Z8snbMnUKUqsErSX2PN',
    consumer_secret: 'DHxB3cVQvFLYJbRUzMYyx5WDOHxS0BiUSkNmLqjpqFJnFMlP8s',
    access_token_key: '326120564-uM3tfJy8nZsVM74y6yOfZg7BLhX99NXWhT0Qq4SH',
    access_token_secret: 'PgwIg21PqgEesRUptneBDKsIMEOcS1m5fXguk6bn9OZBg'
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