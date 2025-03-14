# @login
# Feature:Login Page Verification

# Background: Admin gives the correct LMS portal URL

# Scenario Outline: Validate login with valid data in all field
# Given Admin is on login Page
# When Admin enter valid data in all field and  "<DataInput>" clicks login button  
# Then Admin should land on home page 

# Examples:
# |   DataInput        |
# |   ValidCredential  |

# Scenario Outline: Validate login with invalid data
# Given Admin is on login Page
# When Admin enter invalid data  "<DataInput>" and clicks login button
# Then Error message "Invalid username and password Please try again"
# Examples:
# |   DataInput        |
# |   InvalidCredential|



# Scenario Outline: Validate login credentials with null user name
# Given Admin is on login Page
# When Admin enter value only in password and "<DataInput>" clicks login button 
# Then Error message" Please enter your user name"
# Examples:
# |  DataInput          |
# |  NullUsername       |

# Scenario Outline: Validate login credentials with null password
# Given Admin is on login Page
# When Admin enter value only in user name and  "<DataInput>" clicks login button  
# Then Error message" Please enter your password "
# Examples:
# |  DataInput         |
# |  NullPassword      |

# Scenario Outline: verify login button action through keyboard
# Given Admin is in login Page
# When Admin enter valid credentials "<DataInput>" and clicks login button through keyboard
# Then Admin should land on home page
# Examples:
# Examples:
# |   DataInput        |
# |   ValidCredential  |

# Scenario Outline: verify login button action through mouse
# Given Admin is in login Page
# When Admin enter valid credentials "<DataInput>" and clicks login button through mouse
# Then Admin should land on home page
# Examples:
# Examples:
# |   DataInput        |
# |   ValidCredential  |

