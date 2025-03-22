Feature: Delete batch validation and Delete multiple batches with checkbox

Background: 
  Given Admin is on the batch page

  # Scenario: validate delete Icon on any row
  # Given Admin is on the Batch page
  # When Admin clicks the delete Icon on any row
  # Then Admin should see the confirm alert box with yes and no button

  # Scenario: Validate yes button on the confirm alert box
  # Given Admin is on the Batch page
  # When Admin clicks on the delete icon and click yes button
  # Then Admin should see the successful message and the batch should be deleted

  # Scenario: validate no button on the confirm alert box
  # Given Admin is on the Batch page
  # When Admin clicks on the delete icon and click no button
  # Then Admin should see the alert box closed and the batch is not deleted

  # Scenario: validate close Icon on the alert box
  # Given Admin is on the batch confirm popup page
  # When Admin clicks on the close icon
  # Then Admin should see the alert box closed 

  Scenario: Validate single row delete with checkbox
  Given Admin is on the batch page
  When Admin clicks on the delete icon under the Manage batch header
  Then The respective row in the table should be deleted

  # Scenario: Validate multiple row delete with checkbox
  # Given Admin is on the batch page
  # When Admin clicks on the delete icon under the Manage batch header
  # Then The respective row in the table should be deleted








