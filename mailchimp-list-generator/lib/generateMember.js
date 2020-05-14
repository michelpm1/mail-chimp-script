const mailChimpApi = require('../api/mailChimpApi');
const fakeMember = require('../utils/fakeMember');
const faker = require('faker');

exports.generateList = async () => {
    const generateMember = () => {
        return {
            "email_address": faker.internet.email(),
            "status": 'subscribed',
            "merge_fields": {
                "FNAME": faker.name.firstName(),
                "LNAME": faker.name.lastName()
            }
        }
    }
    const dataFakeMembers = () => {
        const generatedMembers = [];
        for (let i = 0; i < 100; i++) {
            generatedMembers.push(generateMember());
        }
        console.log(`Generating new list with ${generatedMembers.length} members`)
        console.log('Loading...');
        return { "members": generatedMembers };
    }

    try {
        let result = {};
        const list = await mailChimpApi.getList();
        if (list.data.lists.length !== 0) {
            await mailChimpApi.deleteList(list.data.lists[0].id);

            const createdList = await mailChimpApi.createList(fakeMember.fakeMemberBoilerPlate());

            result = await mailChimpApi.addMembers(dataFakeMembers(), createdList.data.id);
        } else {
            const createdList = await mailChimpApi.createList(fakeMember.fakeMemberBoilerPlate());
            result = await mailChimpApi.addMembers(dataFakeMembers(), createdList.data.id);
        }
        return result;
    } catch (e) {
        console.error(e);
        throw Error(e)
    }
}