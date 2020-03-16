/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const Agenda = require('agenda');

const config = require('../config/config.js');

const connectionOpts = {
    db: {
        address: config.databases.mongodb.connection,
        collection: 'agendaJobs',
    },
};

const agenda = new Agenda(connectionOpts);

const jobTypes = process.env.JOB_TYPES ? process.env.JOB_TYPES.split(',') : [];
console.log(jobTypes);

jobTypes.forEach((type) => {
    const path = `../jobs/${type}`;
    require(path)(agenda);
});

if (jobTypes.length) {
    // eslint-disable-next-line func-names
    (async function () {
        await agenda.start();
        await agenda.every('1 minutes', 'g-alerts');
        await agenda.every('1 minutes', 'g-feeds');
    }());
}

module.exports = agenda;
