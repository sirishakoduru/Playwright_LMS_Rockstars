Feature: program page Validation

Background: Admin is logged in to LMS Portal
Given The browser is open 
When Admin gives the correct LMS portal URL
Then Admin should land on the login page

@ManageProg01
Scenario: Verify heading in manage program
Given Admin is on home page after Login
When Admin clicks "program" on the navigation bar
Then Admin should be navigated to "program"

@ManageProg02
Scenario: Verify view details of programs
Given Admin is on home page after Login
When Admin clicks "program" on the navigation bar
Then Admin should able to see Program name, description, and status for each program

@ManageProg03
Scenario: Verify the Multiple Delete button state 
Given Admin is on home page after Login
When  Admin clicks "program" on the navigation bar
Then  Admin should see a Delete button in left top is disabled

@ManageProg04
Scenario: Verify the Search button 
Given Admin is on home page after Login
When  Admin clicks "program" on the navigation bar
Then Admin should see Search bar with text as "Search..."

@ManageProg05
Scenario: Verify column header name of data table
Given Admin is on home page after Login
When  Admin clicks "program" on the navigation bar
Then Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit/Delete

@ManageProg06
Scenario: Verify checkbox default state beside Program Name column header
Given Admin is on home page after Login
When  Admin clicks "program" on the navigation bar
Then Admin should see checkbox default state as unchecked beside Program Name column header 

@ManageProg07
Scenario: Verify checkboxes default state beside each Program names in the data table 
Given Admin is on home page after Login
When  Admin clicks "program" on the navigation bar
Then Admin should see check box default state as unchecked on the left side in all rows against program name 

@ManageProg08
Scenario: Verify Sort icon in manage program
Given Admin is on home page after Login
When  Admin clicks "program" on the navigation bar
Then Admin should see the sort arrow icon beside to each column header except Edit and Delete 

@ManageProg09
Scenario: Verify edit and delete icon in manage program
Given Admin is on home page after Login
When  Admin clicks "program" on the navigation bar
Then Admin should see the Edit and Delete buttons on each row of the data table

@ManageProg10
Scenario: Verify pagination icons below data table in manage program
Given Admin is on home page after Login
When  Admin clicks "program" on the navigation bar
Then  Admin should see the text as "Showing x to y of z entries" along with Pagination icon below the table 

@ManageProg11
Scenario: Verify footer message in manage program
Given Admin is on home page after Login
When  Admin clicks "program" on the navigation bar
Then Admin should see the footer as "In total there are z programs"




