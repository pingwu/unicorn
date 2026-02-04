---
name: multi-file-architecture
description: Orchestrate coordinated changes across entire web application stacks—frontend, backend, database, and config—in single operations. Use when building features that span multiple files, refactoring across layers, or when sequential file-by-file editing would be inefficient.
---

# Multi-File Coherent Architecture

## Core Principle

Describe outcomes, not steps. The agent coordinates; you orchestrate.

## Outcome-First Patterns

### Feature Implementation

```
❌ "Create a User model, then create a users table migration, then add a /users route, then create a UserList component"

✅ "Add user management: database table, API endpoints for CRUD, and a dashboard component showing all users with edit/delete actions"
```

### Refactoring

```
❌ Step-by-step file changes

✅ "Rename 'customer' to 'client' across the entire codebase—models, routes, components, and tests"
```

## Orchestration Checklist

Before prompting, identify:
1. **Affected layers**: Frontend / Backend / Database / Config
2. **Data flow**: What connects these layers?
3. **Constraints**: Auth requirements, validation rules, error handling patterns
4. **Success criteria**: What does "done" look like?

## Anti-Patterns to Avoid

| Instead of... | Try... |
|---------------|--------|
| "First do X, then Y, then Z" | "I need X, Y, and Z working together" |
| Specifying file paths | Describing the feature boundary |
| Dictating implementation | Stating acceptance criteria |

## Power Move

Combine with test-driven-scaffolding: "Add user authentication with JWT. Write the tests first, then implement to pass them."

The agent handles the 47 file touches. You define what "authenticated" means.
