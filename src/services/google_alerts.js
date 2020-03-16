const fs = require('fs');
const alertsApi = require('google-alerts-api');

const SID = 'uQdSZm17nZm7LwK_deqvMh5xavhD3TMwFGQVoDk9AnlAkCw_qeCO0mDZylHWwFH7UvpvbQ.';
const HSID = 'AWwkG3GMTyY9UDrHZ';
const SSID = 'AEqB-974VdHazYa-a';
const mail = '';
const password = '';

const {
    // eslint-disable-next-line no-unused-vars
    HOW_OFTEN, DELIVER_TO, HOW_MANY, SOURCE_TYPE,
} = alertsApi;

class Alerts {
    static init() {
        if (SID && HSID && SSID) {
            fs.writeFileSync(
                './data/cookies.data',
                alertsApi.generateCookiesBySID(SID, HSID, SSID),
            );
            alertsApi.configure({
                cookies: fs.readFileSync('./data/cookies.data').toString(),
            });
        } else if (mail && password) {
            alertsApi.configure({
                mail,
                password,
            });
        }
    }

    static getMyAlerts() {
        return new Promise((resolve, reject) => {
            alertsApi.sync((err) => {
                if (err) return reject(err);
                const alertList = alertsApi.getAlerts();
                return resolve(alertList);
            });
        });
    }

    static printAlertInfo(alert) {
        console.log('name:', alert.name);
        console.log('rss:', alert.rss);
        // 'How Many' property information:
        if (alert.howMany === HOW_MANY.BEST) {
            console.log('How many: Only the best results');
        } else if (alert.howMany === HOW_MANY.ALL) {
            console.log('How many: All Results');
        }
    }
}


module.exports = Alerts;
