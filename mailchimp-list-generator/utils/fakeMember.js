const faker = require('faker');

exports.fakeMemberBoilerPlate = () => {

    return {
        "name": "test",
        "contact": {
            "company": faker.company.companyName(),
            "address1": faker.address.streetAddress(),
            "address2": faker.address.streetAddress(),
            "city": faker.address.city(),
            "state": faker.address.state(),
            "zip": faker.address.zipCode(),
            "country": faker.address.country(),
            "phone": faker.phone.phoneNumber()
        },
        "permission_reminder": "test",
        "use_archive_bar": false,
        "campaign_defaults": {
            "from_name": "test",
            "from_email": faker.internet.email(),
            "subject": "test",
            "language": "test"
        },
        "notify_on_subscribe": "",
        "notify_on_unsubscribe": "",
        "email_type_option": false,
        "visibility": "pub",
        "double_optin": false,
        "marketing_permissions": false
    }
}