const axios = require('axios');

exports.createList = async (data) => {
    return await axios({
        method: 'post',
        url: `https://${process.argv[4]}.api.mailchimp.com/3.0/lists/`,
        auth: {
            username: process.argv[2],
            password: process.argv[3]
        },
        data
    });
}

exports.addMembers = async (data, id) => {
    return await axios({
        method: 'post',
        url: `https://${process.argv[4]}.api.mailchimp.com/3.0/lists/${id}`,
        auth: {
            username: process.argv[2],
            password: process.argv[3]
        },
        data
    });
}

exports.getList = async () => {
    return axios({
        method: 'get',
        url: `https://${process.argv[4]}.api.mailchimp.com/3.0/lists/`,
        auth: {
            username: process.argv[2],
            password: process.argv[3]
        },
    });
}

exports.deleteList = async (id) => {
    return await axios({
        method: 'delete',
        url: `https://${process.argv[4]}.api.mailchimp.com/3.0/lists/${id}`,
        auth: {
            username: process.argv[2],
            password: process.argv[3]
        },
    });
}