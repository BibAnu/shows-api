const axios = require('axios');

/**
 * Get current running shows
 */
function getCurrentShows(req, res, next) {
    axios.get('http://124.41.240.154:9803/api/nowshowinginfo')
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            next(error)
        });
}

module.exports = { getCurrentShows };