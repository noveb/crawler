const gAlerts = require('../services/google_alerts');
const AlertData = require('../models/google-alert');

// eslint-disable-next-line func-names
module.exports = function (agenda) {
    agenda.define('g-alerts', async () => {
        gAlerts.init();
        const alerts = await gAlerts.getMyAlerts();
        // gAlerts.printAlertInfo(alerts[0])
        // console.log(alerts);
        alerts.forEach(async (alert) => {
            try {
                await AlertData.findOneAndUpdate(
                    { id: alert.id },
                    alert,
                    { upsert: true },
                );
            } catch (error) {
                console.error(error);
            }
        });
    });
};
