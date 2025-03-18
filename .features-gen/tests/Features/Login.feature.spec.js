// Generated from: tests\Features\Login.feature
import { test } from "playwright-bdd";

test.describe('Login Page Verification', () => {

  test.describe('Validate login with valid data in all field', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, When, Then }) => { 
      await Given('Admin is on login Page'); 
      await When('Admin enter valid data in all field and  "ValidCredential" clicks login button'); 
      await Then('Admin should land on home page'); 
    });

  });

  test.describe('Validate login with invalid data', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, When, Then }) => { 
      await Given('Admin is on login Page'); 
      await When('Admin enter invalid data  "InvalidCredential" and clicks login button'); 
      await Then('Error message "Invalid username and password Please try again"'); 
    });

  });

  test.describe('Validate login credentials with null user name', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, When, Then }) => { 
      await Given('Admin is on login Page'); 
      await When('Admin enter value only in password and "NullUsername" clicks login button'); 
      await Then('Error message" Please enter your user name"'); 
    });

  });

  test.describe('Validate login credentials with null password', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, When, Then }) => { 
      await Given('Admin is on login Page'); 
      await When('Admin enter value only in user name and  "NullPassword" clicks login button'); 
      await Then('Error message" Please enter your password "'); 
    });

  });

  test.describe('verify login button action through keyboard', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, When, Then }) => { 
      await Given('Admin is in login Page'); 
      await When('Admin enter valid credentials "ValidCredential" and clicks login button through keyboard'); 
      await Then('Admin should land on home page'); 
    });

  });

  test.describe('verify login button action through mouse', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, When, Then }) => { 
      await Given('Admin is in login Page'); 
      await When('Admin enter valid credentials "ValidCredential" and clicks login button through mouse'); 
      await Then('Admin should land on home page'); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\Features\\Login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":13,"tags":["@login"],"steps":[{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin enter valid data in all field and  \"ValidCredential\" clicks login button","stepMatchArguments":[{"group":{"start":41,"value":"\"ValidCredential\"","children":[{"start":42,"value":"ValidCredential","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":21,"tags":["@login"],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When Admin enter invalid data  \"InvalidCredential\" and clicks login button","stepMatchArguments":[{"group":{"start":26,"value":"\"InvalidCredential\"","children":[{"start":27,"value":"InvalidCredential","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":31,"tags":["@login"],"steps":[{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When Admin enter value only in password and \"NullUsername\" clicks login button","stepMatchArguments":[{"group":{"start":39,"value":"\"NullUsername\"","children":[{"start":40,"value":"NullUsername","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Error message\" Please enter your user name\"","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":39,"tags":["@login"],"steps":[{"pwStepLine":39,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When Admin enter value only in user name and  \"NullPassword\" clicks login button","stepMatchArguments":[{"group":{"start":41,"value":"\"NullPassword\"","children":[{"start":42,"value":"NullPassword","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Error message\" Please enter your password \"","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":48,"tags":["@login"],"steps":[{"pwStepLine":49,"gherkinStepLine":42,"keywordType":"Context","textWithKeyword":"Given Admin is in login Page","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials \"ValidCredential\" and clicks login button through keyboard","stepMatchArguments":[{"group":{"start":30,"value":"\"ValidCredential\"","children":[{"start":31,"value":"ValidCredential","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":58,"pickleLine":57,"tags":["@login"],"steps":[{"pwStepLine":59,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given Admin is in login Page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials \"ValidCredential\" and clicks login button through mouse","stepMatchArguments":[{"group":{"start":30,"value":"\"ValidCredential\"","children":[{"start":31,"value":"ValidCredential","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":61,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
]; // bdd-data-end