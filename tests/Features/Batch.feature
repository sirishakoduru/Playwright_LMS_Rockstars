@Batch
Feature: Batch Page Navigation

Scenario: Validate login with valid data in all field
Given Admin is on login Page
When Admin enter valid data in all field and clicks login button   
Then Admin should land on home page
