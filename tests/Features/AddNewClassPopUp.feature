Feature: Add New Class popup
Background: Admin is on the Manage Class page after login
          Given Admin is on the Class Popup window

Scenario: Check if class is created when only mandatory fields are entered with valid data
Given Admin is on the Class Popup window
When Admin enters mandatory fields in the form and clicks on save button
Then Admin gets message Class added Successfully 

Scenario: Check no classes value added when selecting class dates
When Admin selects class date in date picker
Then Admin should see no of class value is added automatically 

Scenario: Check weekend dates are disabled in calendar
When Admin clicks date picker 
Then Admin should see weekends dates are disabled to select

Scenario: Check if class is created when only optional fields are entered with valid data
When Admin skips to add value in mandatory field and enter only the optional field
Then Admin should see error message below the test field and the field will be highlighted in red color 


Scenario: check if class is created when invalid data is entered in all of the fields
When Admin enters invalid data in all of the  fields in the form and clicks on save button
Then Admin gets error message and class is not created

Scenario: Empty form submission
When Admin clicks on save button without entering data 
Then class won't be created and Admin gets error message

Scenario: Validate Cancel/Close(X) icon on class Details form
When Admin clicks Cancel or Close Icon on Admin Details form
Then Class Details popup window should be closed without saving

Scenario: Validate Save button on class Details form
When Admin clicks save button 
Then Admin can see the class details popup closed and adding new class

















