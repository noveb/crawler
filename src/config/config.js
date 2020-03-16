module.exports = {

    databases: {
        mongodb: {
            connection: 'mongodb://mongo:27017/crawler',
        },
    },
    google: {
        SID: process.env.GOOGLE_SID,
        HSID: process.env.GOOGLE_HSID,
        SSID: process.env.GOOGLE_SSID,
        mail: process.env.GOOGLE_MAIL,
        password: process.env.GOOGLE_PASSWORD,
    },
};
