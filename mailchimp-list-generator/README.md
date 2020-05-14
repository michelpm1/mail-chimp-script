# Script to generate mailchimp list

### How to run it:

Require this module at your initialization script:
```
const mailChimpListGenerator = require('./mailchimp-list-generator');
```
### Use this method to generate the list:
```
mailChimpListGenerator.generate();
```

### Run the script with the following arguments (user, token, us region) in this order, example:

```
node command.js victor123 dokf2a21029ba661dfa0d3ba2c2d3c2f-us8 us-8
```
#### It will run the script and generate the list with members automatically

#### Obs list is limited to 10 members at free tier
