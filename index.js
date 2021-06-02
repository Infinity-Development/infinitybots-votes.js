const fetch = require('node-fetch');

class InfinityVotes {

    constructor (id, auth) {
        this.id = id,
        this.auth = auth,
        this.base_url = 'https://api.infinitybotlist.com/votes'
    }

    /** GET THE LAST 5 VOTES FOR A BOT BY ID */
    async votes(botID, response) {

        if (!botID) throw new Error('[IBL-API : 400] Missing Bot ID, Should be a valid String or Snowflake');

        await fetch(`${this.base_url}/${botID}`, {
            method: 'GET',
            headers: {"Content-Type": "application/json", 'authorization': this.auth },
        }).then(async (res) => { console.log(await res.json()) })
    }
}

module.exports = InfinityVotes;