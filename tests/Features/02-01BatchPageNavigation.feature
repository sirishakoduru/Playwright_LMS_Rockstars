@Batch
Feature: Batch Page Navigation

Background: Admin successfully Logged on to the LMS Portal
Given Admin is on login Page
When Admin enter valid data in all field and clicks login button   

@Batch_Menu_Click
Scenario: Verify Admin Navigate to Batch page successfully
Given Admin is on the home Page
When Admin Clicks on the Batch menu from the header
Then Admin should be in the Manage Batch Page
