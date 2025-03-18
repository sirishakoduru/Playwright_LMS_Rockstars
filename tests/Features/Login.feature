@login
Feature:Login Page Verification

Background: Admin gives the correct LMS portal URL

Scenario Outline: Validate login with valid data in all field
Given Admin is on login Page
When Admin enter valid data in all field and  "<DataInput>" clicks login button  
Then Admin should land on home page 

Examples:
|   DataInput        |
|   ValidCredential  |

