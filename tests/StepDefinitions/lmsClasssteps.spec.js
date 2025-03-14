//import{test,expect} from '@playwright/test'
//import { createBdd } from 'playwright-bdd';
//import lmsClassPage from "../Pages/lmsClassPage.js";

//const {Given,When,Then} = createBdd()

/*Given('Admin is on the login Page', async ({}) => {
  // Step: Given Admin is on the login Page
  // From: tests\Features\lmsClass.feature:7:1
});

When('Admin enters username {string} and password {string}', async ({}, arg, arg1) => {
  // Step: When Admin enters username "Playwright@gmail.com" and password "March@2025"
  // From: tests\Features\lmsClass.feature:8:1
});

Then('Admin is logged successfully', async ({}) => {
  // Step: Then Admin is logged successfully
  // From: tests\Features\lmsClass.feature:9:1
});

Given('Admin is on the home Page', async ({}) => {
  // Step: Given Admin is on the home Page
  // From: tests\Features\lmsClass.feature:12:1
});

When('clicks the Class Navigation bar in the Header', async ({}) => {
  // Step: When clicks the Class Navigation bar in the Header
  // From: tests\Features\lmsClass.feature:13:1
});

Then('Admin should see the {string} Title', async ({}, arg) => {
  // Step: Then Admin should see the "LMS-Learning Management System" Title
  // From: tests\Features\lmsClass.feature:14:1
});

Given('Admin is on the home page after login', async ({}) => {
  // Step: Given Admin is on the home page after login
  // From: tests\Features\lmsClass.feature:18:1
});

When('Admin clicks the Class Navigation bar in the Header', async ({}) => {
  // Step: When Admin clicks the Class Navigation bar in the Header
  // From: tests\Features\lmsClass.feature:19:1
});

Then('Admin should see the {string} Header', async ({}, arg) => {
  // Step: Then Admin should see the "Mange Class" Header
  // From: tests\Features\lmsClass.feature:20:1
});

Then('Admin should see the Search Bar in Manage class page', async ({}) => {
  // Step: Then Admin should see the Search Bar in Manage class page
  // From: tests\Features\lmsClass.feature:26:1
});

/*

Given('Admin is on the login Page', async ({page}) => {
  
  ClassPage = new lmsClassPage(page)
  await page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');
  

});

When('Admin enters username {string} and password {string}', async ({page}, username, password) => {
  await page.getByRole('textbox', { name: 'User' }).fill(username)
  await page.getByRole('textbox', { name: 'Password' }).fill(password)
  await page.getByRole('button', { name: 'Login' }).click();
  await page.pause()


});

Then('Admin is logged successfully', async ({}) => {
  // Step: Then Admin is logged successfully
  // From: tests\Features\lmsClass.feature:9:1
});

Given('Admin is on the home Page', async ({}) => {
  // Step: Given Admin is on the home Page
  // From: tests\Features\lmsClass.feature:12:1
});

When('clicks the Class Navigation bar in the Header', async ({}) => {
  // Step: When clicks the Class Navigation bar in the Header
  // From: tests\Features\lmsClass.feature:13:1
});

Then('Admin should see the {string} Title', async ({}, arg) => {
  // Step: Then Admin should see the "LMS-Learning Management System" Title
  // From: tests\Features\lmsClass.feature:14:1
});

Given('Admin is on the home page after login', async ({}) => {
  // Step: Given Admin is on the home page after login
  // From: tests\Features\lmsClass.feature:18:1
});

When('Admin clicks the Class Navigation bar in the Header', async ({}) => {
  // Step: When Admin clicks the Class Navigation bar in the Header
  // From: tests\Features\lmsClass.feature:19:1
});

Then('Admin should see the {string} Header', async ({}, arg) => {
  // Step: Then Admin should see the "Mange Class" Header
  // From: tests\Features\lmsClass.feature:20:1
});

Then('Admin should see the Search Bar in Manage class page', async ({}) => {
  // Step: Then Admin should see the Search Bar in Manage class page
  // From: tests\Features\lmsClass.feature:26:1
});*/

/*let ClassPage

Given('Admin is on the login Page', async ({page}) => {
    browser = await chromium.launch;
     ClassPage = new lmsClassPage(page)
     await page.goto('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login');
     

  });
  
  When('Admin enters username {string} and password {string}', async ({page}, username, password) => {
    
    await page.getByRole('textbox', { name: 'User' }).fill(username)
    await page.getByRole('textbox', { name: 'Password' }).fill(password)
    await page.getByRole('button', { name: 'Login' }).click();
    await page.pause()
   // ClassPage.credentials(username,password);
   // ClassPage.loginbutton();

  });
  
  Then('Admin is logged successfully', async ({page}) => {
      
    ClassPage.lmshomePageTitle()
    console.log('logged successfully')
    
    // await page.getByText('LMS - Learning Management')    
  });
  
  Given('Admin is on the home Page', async ({page}) => {

   ClassPage.Home_Page()
   console.log(HomePage)

  });
  
  When('clicks the Class Navigation bar in the Header', async ({page}) => {
    
    ClassPage.classNavigatorLink();
   
  });
  
  Then('Admin should see the {string} Title', async ({}, arg) => {
    
    //page.getByText('LMS - Learning Management').toBeVisible(title);
   // ClassPage.Home_Title(title)


  });
  
  Given('Admin is on the home page after login', async ({}) => {
    // Step: Given Admin is on the home page after login
    // From: tests\Features\lmsclassone.feature:18:1
  });
  
  When('Admin clicks the Class Navigation bar in the Header', async ({}) => {
    // Step: When Admin clicks the Class Navigation bar in the Header
    // From: tests\Features\lmsclassone.feature:19:1
  });
  
  Then('Admin should see the {string} Header', async ({}, arg) => {
    // Step: Then Admin should see the "Mange Class" Header
    // From: tests\Features\lmsclassone.feature:20:1
  });
  
  Then('Admin should see the Search Bar in Manage class page', async ({}) => {
    // Step: Then Admin should see the Search Bar in Manage class page
    // From: tests\Features\lmsclassone.feature:26:1
  });