Feature: Batch Page Validation

Background: Admin successfully Logged on to the LMS Portal
Given Admin is on the home page after login for batch

@Validate_Title
Scenario: Validate "Title" in Batch Page
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the "LMS-Learning Management System" Title

@Validate_Heading
Scenario: Validate "heading" in the Batch Page
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the "Manage Batch" Heading

@Validate_Disabled_Delete_Icon
Scenario: Validate disabled "Delete Icon" under the header in the Batch Page
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the disabled "Delete Icon" under the header

@Validate_Pagination
Scenario: Validate pagination in the Batch Page
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the enabled pagination controls under the data table

@Validate_Edit_Icon_EachRow
Scenario: Validate edit icon in each data rows
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the edit icon in each row

@Validate_Delete_Icon_EachRow
Scenario: validate delete icon in each data rows
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the delete icon in each row

@Validate_Checkbox_EachRow
Scenario: validate checkbox in each data rows
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the checkbox in each row

@Validate_Database_Header
Scenario: Validate Datatable headers
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of classes, Program Name, Edit or Delete

@Validate_Checkbox_Datatable_row
Scenario: Validate "Checkbox" in the Datatable header row
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the checkbox  in the datatable header row

@Validate_Sort_Icon
Scenario: Validate "sort icon" next to all the datatable header
Given Admin is on the home page
When Admin Clicks on the Batch menu from the header for batch
Then Admin should see the sort icon next to all Datatable headers







