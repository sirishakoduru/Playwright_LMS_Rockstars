Feature: Edit icon Validation

Background: 
Given Admin is on the batch page

Scenario: Validate Edit icon feature in any row
Given Admin is on the Batch page
When Admin clicks the edit icon
Then Admin should see the Batch details pop up window

Scenario: Validate program name  value is disabled to edit
Given Admin is on the Batch page
When Admin clicks the edit icon
Then Admin should see Program name value field is disabled for editing

Scenario: Validate batch name  value is disabled to edit
Given Admin is on the Batch page
When Admin clicks the edit icon
Then Admin should see batch name value field is disabled for editing

Scenario: Validate editing description and No. of classes fields with invalid data in the pop up
Given Admin is on the Batch Details Page
When Admin Updates any fields with invalid data and click save button
Then Admin should get a error message under the respective field

Scenario: validate save button in Batch details pop up
Given Admin is on the Batch Details Page
When Admin enters the valid data to all the mandatory fields and click save button 
Then Admin should get a successful message for editing the batch

Scenario: validate cancel button in Batch details pop up
Given Admin is on the Batch Details Page
When Admin enters the valid data to all the mandatory fields for edit and click cancel button 
Then Admin can see the batch details popup closes without editing the batch



