
//import { envpage } from '../Pages/Envpage';
//import {createBdd} from 'playwright-bdd';
//import {test} from 'test/Fixtures/Fixtures'
//import { classPage } from '../Pages/classPage';

//const {Given, When, Then } = createBdd();
//let browser,page,classLoginPage
/*
Given('The browser is open', async ({page}) => {
 
 // page = await context.newPage();
 classLoginPage = new classPage(page);
await classLoginPage.loginurl();
// await page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login')
  

  //await classLoginPage.loginurl();
});

When('Admin enters valid data in all fields and clicks the login button', async ({page}) => {
  classLoginPage = new classPage(page);
await classLoginPage.user_credentials('Playwright@gmail.com','March@2025');



});

Then('Admin should land on the home page', async ({page}) => {
  classLoginPage = new classPage(page);
await classLoginPage.homepageurl();

});





/*Given('The browser is open', async ({page}) => {
  //const classPage = new classPage(page);
  await classPage.loginurl();
});

When('Admin enters valid data in all field and clicks login button', async ({page}) => {
  const classPage = new classPage(page);
  await classPage.user_credentials();
  await classPage.loginbutton_credentials();
  
});

Then('Admin should land on home page', async ({page}) => {
  const classPage = new classPage(page);
  await classPage.homepageurl();
 
});


/*Given('User is on Loginpage', async ({Envpagelogin}, url) => {
    
await Envpagelogin.loginurl(url)

  });
  
  When('Use enters email address and Password', async ({Envpagelogin}, user,password) => {
    await Envpagelogin.user-credentials(user, password)
    //await Envpage.user-credentials(process.env.PASSWORD)
  });
  
  And('clicks on Login button', async ({Envpagelogin}) => {
    
 await Envpagelogin.login_credentials();


  });
  
  
    Then('user should be on homepage', async ({Envpage}) => {

      await Envpagelogin.hompageurl();
    
  
  })*/
