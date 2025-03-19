
Feature: Manage Program Page validation

    Background:
        Given Admin is logged in to LMS Portal


    # Scenario:Verify heading in manage program
    #     When Admin clicks Program on the navigation bar
    #     Then Admin should see heading " Manage Program"

    # Scenario:Verify view details of programs
    #     When Admin clicks Program on the navigation bar
    #     Then Admin should able to see Program name, description, and status for each program

    # Scenario:Verify the Multiple Delete button state
    #     When Admin clicks Program on the navigation bar
    #     Then Admin should see a Delete button in left top is disabled


    # Scenario:Verify the Search button
    #     When Admin clicks Program on the navigation bar
    #     Then Admin should see Search bar with text as "Search..."

    # Scenario: Verify column header name of data table
    #     When  Admin clicks Program on the navigation bar
    #     Then Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit Delete


    # Scenario: Verify checkbox default state beside Program Name column header
    #     When Admin clicks Program on the navigation bar
    #     Then Admin should see checkbox default state as unchecked beside Program Name column as header

    Scenario: Verify checkboxes default state beside each Program names in the data table
        When Admin clicks Program on the navigation bar
        Then Admin should see check box default state as unchecked on the left side in all rows against program name

    # Scenario: Verify Sort icon in manage program
    #     When Admin clicks Program on the navigation bar
    #     Then Admin should see the sort arrow icon beside to each column header except Edit and Delete

    # Scenario: Verify edit and delete icon in manage program
    #     When Admin clicks Program on the navigation bar
    #     Then Admin should see the Edit and Delete buttons on each row of the data table

    # Scenario: Verify pagination icons below data table in manage program
    #     When Admin clicks Program on the navigation bar
    #     Then Admin should see the text as "Showing x to y of z entries" along with Pagination icon below the table. x- starting record number on that page y-ending record number on that page z-Total number of records


    # Scenario: Verify footer message in manage program
    #     When Admin clicks Program on the navigation bar
    #     Then Admin should see the footer as In total there are z programs z- Total number of records

