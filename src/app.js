const core = require('@actions/core');
const fetch = require('node-fetch');

try {

    const url = 'https://api.bunny.net/pullzone/' + core.getInput('zoneID') + '/purgeCache';
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json', AccessKey: core.getInput('accessKey') }
    };
    fetch(url, options)
        .then(res => Promise.all([res.status]))
        .then(([status]) => {

            if (status == 204) {
                core.info('✅ The cache was successfuly purged');
            } else {
                core.setFailed('❌ Status: ' + status);
            }

        })
        .catch((err) => {
            core.setFailed('❌ ' + err);
        });

} catch (error) {

    core.setFailed('❌ ' + error.message);
}
