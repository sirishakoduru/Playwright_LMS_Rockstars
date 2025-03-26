Feature: Manage class page

Background: Admin is on the home page after login
        Given Admin is on the home page after login
        When Admin clicks the Class Navigation bar in the Header   

@Class_LMS_Title
Scenario: Validating the Title in the Manage class page
Given Admin is on the home Page
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the "LMS-Learning Management System" Title

@Class_Header
Scenario: Validating the Header in the Manage class page
Then Admin should see the "Mange Class" Header

@Class_Searchbar
Scenario: Validating Search bar in class page
Then Admin should see the Search Bar in Manage class page

@Class_Datatable_Headers
Scenario: Validating the data table headers in the class page
Then Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit Delete
@Class_Datatable_Text_Pagination_icon
Scenario: Validating the text and pagination icon in the classpage
Then Admin should see the " showing x to y of  z entries" and enabled pagination controls under the data table

@Class_Datatable_Sort_icon
Scenario: Validate the sort icon of all the field in datatable
Then Admin should see the Sort icon of all the field in the datatable

@Class_Delete_Button
Scenario: Validating the Delete button under the Manage class 
Then Admin should see the Delete button under the Manage class page header

@Class_Datatable_Text_Pagination_icon
Scenario: Validate the total no of classes in manage class page
Then Admin should see Total no of classes in below of the data table

