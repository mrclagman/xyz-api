require('request');
const request = require('request-promise-native');

// Using promise with async/await
async function makeAPIRequest(opts) {
    try {
        let response = await request(opts);
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = makeAPIRequest;