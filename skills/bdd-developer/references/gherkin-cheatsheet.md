# Gherkin Syntax Cheatsheet

Gherkin is a business-readable, domain-specific language for defining software behavior. It uses a structured syntax with specific keywords to describe scenarios.

## Core Keywords

*   **`Feature`**: A high-level description of a software feature. It is the primary container for a set of related scenarios.
*   **`Scenario`**: A concrete example of a business rule. It consists of a series of steps.
*   **`Given`**: Describes the initial context or prerequisite state of the system.
*   **`When`**: Describes an event or an action performed by a user.
*   **`Then`**: Describes the expected outcome or result.
*   **`And`**, **`But`**: Used to add more steps to a `Given`, `When`, or `Then`. They help make scenarios more readable by avoiding repetition of the same keyword.

## Advanced Keywords & Structures

*   **`Background`**: Allows you to add some context to all scenarios in a single feature. It runs before each scenario. Useful for setting up common `Given` steps.

    ```gherkin
    Feature: User Account

    Background:
      Given the user is logged in

    Scenario: User views profile
      When the user navigates to their profile page
      Then they should see their email address

    Scenario: User logs out
      When the user clicks the "Logout" button
      Then they should be logged out
    ```

*   **`Scenario Outline`**: Used to run the same scenario multiple times with different combinations of values. It's a template for a scenario.

*   **`Examples`**: Provides a table of data for a `Scenario Outline`. Each row in the table is a separate run of the scenario.

    ```gherkin
    Scenario Outline: Successful login with different user roles
      Given I am a registered user with the role "<role>"
      When I log in
      Then I should be granted access to the "<page>"

      Examples:
        | role      | page          |
        | "admin"   | "/admin"      |
        | "editor"  | "/editor"     |
        | "viewer"  | "/dashboard"  |
    ```

*   **`Tags`**: Labels that can be attached to `Feature` or `Scenario` to group them (e.g., `@login`, `@smoke-test`). Tags are useful for filtering which tests to run.

    ```gherkin
    @smoke-test
    Feature: Login functionality

      @happy-path
      Scenario: Successful login
        ...

      @sad-path
      Scenario: Failed login
        ...
    ```

*   **Doc Strings**: For passing a larger piece of text as an argument to a step. The text is enclosed in triple quotes `"""`.

    ```gherkin
    Given I have the following email body:
      """
      Hello Team,

      This is a test email.

      Regards,
      BDD Developer
      """
    ```

*   **Data Tables**: For passing a table of data to a step. The table is defined using pipe `|` delimiters.

    ```gherkin
    When I register the following users:
      | name     | email              |
      | Alice    | alice@example.com  |
      | Bob      | bob@example.com    |
    ```
