Feature: Class Page Validation

Background: Admin logged on the home page

Scenario:Verify user is able to login

Scenario: validating login
Given Admin navigates to "https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/login"
When Admin enters username "Playwright@gmail.com" and password "March@2025"
Then Admin is landed on "https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/"

Scenario: Validating the Title in the Manage class page
Given Admin is on the home Page
When clicks the Class Navigation bar in the Header
Then Admin should see the "LMS-Learning Management System" Title


Scenario: Validating the Header in the Manage class page
Given Admin is on the home page after login
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the "Mange Class" Header


Scenario: Validating Search bar in class page
Given Admin is on the home page after login
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the Search Bar in Manage class page

Scenario: Validating the data table headers in the class page
Given Admin is on the home page after login
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit/Delete 

Scenario: Validating the text and pagination icon in the classpage
Given Admin is on the home page after login
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the " showing x to y of  z entries" and enabled pagination controls under the data table

Scenario: Validate the sort icon of all the field in datatable
Given Admin is on the home page after login
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the Sort icon of all the field in the datatable.

Scenario: Validating the Delete button under the Manage class 
Given Admin is on the home page after login
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the Delete button under the Manage class page header.

Scenario: Validating the Delete button under the Manage class 
Given Admin is on the home page after login
When Admin clicks the Class Navigation bar in the Header
Then Admin should see Total no of classes in below of the data table.


