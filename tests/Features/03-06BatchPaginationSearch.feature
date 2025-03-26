Feature: Pagination and Search Text box validation

Background: 
Given Admin is on the batch page

Scenario: Validate next page link
Given Admin is on the batch page
When Admin clicks next page link on the data table
Then Admin should see the Next enabled link

Scenario: validate last page link
Given Admin is on the batch page
When Admin clicks last page link on the data table
Then Admin should see the last page link with next page link disabled on the table 

Scenario: validate the previous page link
Given Admin is on the batch page
When Admin clicks previous page link on the data table
Then Admin should see the previous page on the table

Scenario: validate the first page link
Given Admin is on the batch page
When Admin clicks first page link on the data table
Then Admin should see the very first page on the data table

Scenario: validate search box functionality
Given Admin is on the batch page
When Admin enters the batch name in the search text box
Then Admin should see the filtered batches in the data table

Scenario: Validate logout option in the header is visible and enabled from the batch page
Given Admin is on the batch page
When Admin clicks on the logout button
Then Admin should see the Login screen Page
