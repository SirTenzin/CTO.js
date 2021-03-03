class Client {

    constructor() {
        /*
        TODO:
            Find out the remaining user groups
                Coder
                Reverser
                Heaven

        */
        this.levels = {
            "11": "premium",
            "12": "supreme", 
            "93": "infinite",
            "96": "unknown",
            "97": "unknown",
            "99": "unknown",
            "100": "unknown",
            "101": "unknown",
            "4": "unknown",
            "3": "unknown",
            "6": "unknown",
            "94": "unknown",
            "92": "unknown"
        }
    }

    /**
     * Gets a users auth level
     * @param {String} token Auth key
     */

    getLevel(token) {
        let resp = this._get("https://cracked.to/auth.php")
        resp.onreadystatechange = (e) => {
            if(resp.responseText.includes("error")) {
                return {
                    "Error": "Error: Auth key failure"
                }
            } else {
                let json = JSON.parse(resp.response);
                return {
                    "raw": json,
                    "group": json.group
                };                
            }
        }
    }

    /**
     * Returns lowercase group name from an ID
     * @param {Number} level Group ID
     */

    parseLevel(level) {
        return this.levels[level];
    }

    /**
     * Simple get request
     * @param {String} url URL
     * @param {*} body GET Body
     */

    _get(url, body) {
        let req = new XMLHttpRequest()
        req.open("GET", url)
        req.send(body)
        return req;
    }
}

module.exports = Client;