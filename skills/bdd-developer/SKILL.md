---
name: bdd-developer
description: Assists with Behavior-Driven Development (BDD). Use to create Gherkin feature files, generate step definitions, and understand core BDD concepts.
---

# BDD Developer Skill

This skill provides guidance and automation for applying Behavior-Driven Development (BDD) practices in your projects. It helps bridge the gap between business requirements and technical implementation by using natural language to describe and test application behavior.

## Core Principle

"Collaborate to define behavior, then build to match that behavior."

This skill helps you work "outside-in," starting with a clear, shared understanding of the desired user-facing outcome before writing any code.

## The BDD Workflow

BDD is a collaborative process. This skill assists at each step of the "Define, Develop, Test" cycle.

### Step 1: Define Behavior with Gherkin

When you have a new feature request, the first step is to collaboratively define its behavior.

*   **Action:** Use this skill to translate a feature idea into a valid Gherkin `.feature` file.
*   **Example Prompt:** "I need to build a shopping cart feature. A user should be able to add items, view the cart, and see the total price. Can you create a feature file for this?"
*   **What I will do:** I will generate a `.feature` file with scenarios covering the happy path and common edge cases. I can use templates from the `assets/` directory (like `login-template.feature`) as a starting point for common features.

For a quick refresher on Gherkin syntax, you can ask me to show you the cheatsheet.

*   **Reference:** See [gherkin-cheatsheet.md](references/gherkin-cheatsheet.md) for a full syntax guide.
*   **Reference:** For the "why" behind this process, see [bdd-concepts.md](references/bdd-concepts.md).

### Step 2: Generate Step Definition Boilerplate

Once a `.feature` file is approved, the next step is to wire it up to your testing framework.

*   **Action:** Provide me with a `.feature` file and specify your testing framework (e.g., Jest/Playwright, Cypress, Behave). I will generate the boilerplate "step definition" code.
*   **Example Prompt:** "Here is my `shopping-cart.feature` file. Can you generate the step definition stubs for me using Jest and Playwright?"
*   **What I will do:** I will parse the `Given`, `When`, `Then` steps from your feature file and create the corresponding function stubs in your chosen language and framework, ready for you to fill in with test automation logic.

```javascript
// Example generated stub for Jest/Playwright
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am on the shopping page', async function () {
  // TODO: Implement navigation logic
  await this.page.goto('/shop');
});

When('I add an item to the cart', async function () {
  // TODO: Implement click logic
  await this.page.click('.add-to-cart-button');
});

Then('the cart count should be {int}', async function (count) {
  // TODO: Implement assertion logic
  const cartCount = await this.page.textContent('.cart-count');
  expect(parseInt(cartCount)).toBe(count);
});
```

### Step 3: Implement and Test

With the feature file defining the goal and the step definitions providing the test structure, you can now proceed with implementation.

*   **Action:** Follow the "outside-in" approach. Run the tests (they will fail). Write the application code required to make them pass.
*   **Reference:** The "Outside-In Development" section of [bdd-concepts.md](references/bdd-concepts.md) provides more detail on this workflow.

## Power Moves

*   **"Three Amigos Synthesis":** "I'm the business analyst. Our feature needs to do X. The developer is concerned about Y. The tester is worried about Z. Can you synthesize this into a Gherkin feature file that addresses all three perspectives?"
*   **"Generate Scenarios from User Story":** "Given this user story: 'As a user, I want to reset my password so that I can regain access to my account if I forget it.' Generate a comprehensive set of Gherkin scenarios for this, including edge cases like expired tokens and non-existent email addresses."