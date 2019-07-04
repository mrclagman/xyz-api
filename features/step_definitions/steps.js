const {Given, When, Then} = require('cucumber');
const createData = require('../../helper/createLetterGrid.js');
const makeAPIReq = require('../../helper/makeRequest.js');
const sendRequest = require('../../helper/sendRequest.js');
let url        = 'https://lettergenerator.azurewebsites.net/api/letters';

const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
const expect = chai.expect;

let baseOpts       = {
	"url"   : url,
	"method" : "",
	"json"   : true
}

let resultBody;
let expData = [];

this.World = require(process.cwd() + '/features/step_definitions/world').World;


When(/^user posts request with letter "([^"]*)" and size "([^"]*)"$/, async function (letter, size) {
    // Write code here that turns the phrase above into concrete actions
    console.log(letter)

    
    let opts    = baseOpts;
    //let expData = []

    opts['method'] = 'POST';
	opts['body']   = {
		letters : letter,
		size    : size
    };

    // empty(expData);
    expData = [];
    for(i = 0; i < letter.length; i++){
        console.log(letter[i])
        expData.push({
            letterGrid : createData(letter[i], size)
        })
    }
    
    resultBody  = await makeAPIReq(opts);


});

When(/^user posts get request with letter "([^"]*)" and size "([^"]*)"$/, async function (letter, size) {
    //return 'pending';
    let opts    = baseOpts;
    //let expData = []

    opts['method'] = 'GET';
    opts['url']   = url + "/" + letter + "/" + size
    
    resultBody  = await makeAPIReq(opts);
    console.log(resultBody);

    expData = [];
    for(i = 0; i < letter.length; i++){
        console.log(letter[i])
        expData.push({
            letterGrid : createData(letter[i], size)
        })
    }

    
  });


Then(/^response body should return correct letter and size$/, async function () {
    // console.log(expData);
    // console.log(resultBody);

    expect(resultBody).to.deep.equal(expData);

    //return 'pending';
});