---
name: test-driven-scaffolding
description: Invert the typical workflow by having the agent write tests FIRST, then implement to pass them. Use when building new features, refactoring existing code, or when clear success criteria exist before implementation.
---

# Test-Driven Scaffolding

## Core Principle

Tests are specifications in executable form. Write the contract before the code.

## The Inversion Pattern

```
❌ Traditional: "Build a shopping cart" → code → "now write tests"

✅ Inverted: "Write tests for a shopping cart that can add items, remove items, calculate totals with tax, and apply discount codes" → tests → "now implement to pass"
```

## Acceptance Criteria as Test Specs

Transform requirements into testable assertions:

| Requirement | Test Specification |
|-------------|-------------------|
| "Users can log in" | "Valid credentials return JWT; invalid credentials return 401; locked accounts return 403" |
| "Fast page load" | "Homepage renders in <2s; API responds in <200ms" |
| "Handle errors gracefully" | "Network failure shows retry button; invalid input shows field-specific message" |

## Prompt Patterns

### Feature Development
```
"Write Jest tests for a password reset flow:
- Requesting reset with valid email sends token
- Requesting reset with unknown email returns same success (no enumeration)
- Valid token within 1hr allows password change
- Expired token returns 410
- Used token cannot be reused

Then implement the resetPassword service to pass all tests."
```

### Refactoring Safety Net
```
"Before refactoring the payment processor:
1. Write tests capturing current behavior for all edge cases
2. Verify tests pass with existing code
3. Refactor
4. Verify tests still pass"
```

## When to Use

- ✅ Clear business rules exist
- ✅ Multiple edge cases need handling
- ✅ Code will be maintained long-term
- ✅ Refactoring existing functionality
- ⚠️ Skip for throwaway prototypes

## Power Move

"Write the tests, show me for approval, THEN implement. I want to validate the spec before you write production code."

You become the QA gatekeeper. The agent handles both test and implementation.
