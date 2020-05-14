const generateMember = require('./lib/generateMember');
exports.generate = function () {
    return generateMember.generateList();
}