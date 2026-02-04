Feature: User Login
  As a user of the application
  I want to log in
  So that I can access personalized content and features.

  Scenario: Successful login with valid credentials
    Given I am on the login page
    And I have a registered account with email "<email>" and password "<password>"
    When I enter "<email>" in the email field
    And I enter "<password>" in the password field
    And I click the "Log In" button
    Then I should be redirected to my dashboard page
    And I should see a welcome message.

  Scenario: Failed login with invalid password
    Given I am on the login page
    And I have a registered account with email "<email>" and password "<password>"
    When I enter "<email>" in the email field
    And I enter "wrong-password" in the password field
    And I click the "Log In" button
    Then I should remain on the login page
    And I should see an error message "Invalid email or password."

  Scenario Outline: Login attempts with various user inputs
    Given I am on the login page
    When I enter "<email>" in the email field
    And I enter "<password>" in the password field
    And I click the "Log In" button
    Then I should see an error message indicating "<error_message>"

    Examples:
      | email               | password      | error_message                |
      | not-an-email        | password123   | "Invalid email format"       |
      |                     | password123   | "Email is required"          |
      | test@example.com    |               | "Password is required"       |
