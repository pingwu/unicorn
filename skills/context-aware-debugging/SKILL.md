---
name: context-aware-debugging
description: Accelerate debugging by providing diagnostic context that enables agent reasoning through problem spaces. Use when encountering errors, unexpected behavior, or when standard debugging produces circular results.
---

# Context-Aware Debugging Loops

## Core Principle

Errors are symptoms. Context reveals causes. Feed the agent what it needs to reason, not just react.

## The Diagnostic Triad

Every debug prompt needs three elements:

1. **What happened** (error/symptom)
2. **What should have happened** (intended behavior)  
3. **What changed** (recent modifications, if known)

## Context Surfacing Patterns

### Minimal Context (Quick Fixes)
```
"Error: Cannot read property 'map' of undefined in UserList.jsx line 42. 
Expected: render array of users from API. 
The API returns { data: { users: [...] } }"
```

### Full Context (Complex Bugs)
```
"Authentication flow breaks after login redirect.
- Error: 401 on /api/profile after successful /api/login
- Expected: JWT in cookie should authorize subsequent requests
- Recent change: Added sameSite cookie attribute
- Relevant files: auth.middleware.js, login.controller.js
- Browser: Cookie IS being set (verified in DevTools)"
```

## Diagnostic Questions to Answer First

Before prompting the agent:
- [ ] Can I reproduce it consistently?
- [ ] What's the smallest input that triggers it?
- [ ] What was the last working state?
- [ ] What assumptions am I making about the data?

## Anti-Patterns

| Weak | Strong |
|------|--------|
| "It doesn't work" | "Returns null instead of user object when..." |
| "Fix this error" + stack trace | Stack trace + expected behavior + recent changes |
| "Why is this broken?" | "This breaks when X but works when Y" |

## Power Move

When stuck in a loop: "Explain three different hypotheses for why this could fail, then tell me what evidence would confirm or eliminate each."

The agent becomes a reasoning partner, not just a fix-generator.
