const mailChimpListGenerator = require('./mailchimp-list-generator');

main();
async function main() {
    try {
        await mailChimpListGenerator.generate();
        console.log('New list generated successfully');
        console.log('Ending script...');

    } catch (err) {
        console.log(`Something went wrong, error: ${err}`);
    } finally {
        process.exit();

    }
}   