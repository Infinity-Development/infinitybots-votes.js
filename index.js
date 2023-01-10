const fetch = require('node-fetch');

class InfinityVotes {

    constructor (id, auth) {
        this.id = id,
        this.auth = auth,
        this.base_url = 'https://api.infinitybots.gg'
    }

    async votes(userID, botID) {
        if (!botID || !userID) throw new Error('[IBL-API : 400] Missing Bot ID, Should be a valid String or Snowflake');

        await fetch(`${this.base_url}/users/${userID}/bots/${botID}/votes`, {
            method: 'GET',
            headers: {"Content-Type": "application/json", 'authorization': this.auth },
        }).then(async (res) => { console.log(await res.json()) })
    }
}

module.exports = InfinityVotes;
