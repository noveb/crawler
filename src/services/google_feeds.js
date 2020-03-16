
const request = require('request-promise');

class Requests {
    static async getRSSfeed(url) {
        const options = {
            uri: url,
        };
        const feed = await request(options);
        return feed;
    }
}

module.exports = Requests;
