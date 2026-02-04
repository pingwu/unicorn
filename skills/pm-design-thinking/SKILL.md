---
name: pm-design-thinking
description: Frame web development through user outcomes and design thinking principles. Use when defining features, prioritizing backlogs, translating stakeholder needs into buildable specifications, or when technical implementation needs grounding in user value.
---

# PM Design Thinking for Web Development

## Core Principle

Users don't want features. They want outcomes. Build backward from the transformation.

## The Double Diamond Applied

### Diamond 1: Problem Space
```
"Before building: Who is frustrated? What are they trying to accomplish? 
What's blocking them? What does success look like in their words?"
```

### Diamond 2: Solution Space
```
"After understanding: What's the smallest thing we can build to test 
if we understood the problem correctly?"
```

## User Story → Agent Prompt Translation

| PM Artifact | Agent-Ready Specification |
|-------------|---------------------------|
| "As a user, I want to filter products" | "Build product filtering: by category (multi-select), price range (slider), and availability. Show result count updating in real-time. Empty states show 'No matches' with clear-filters option" |
| "Improve checkout conversion" | "Reduce checkout to single page. Show running total. Validate fields on blur, not submit. Guest checkout default, account creation optional post-purchase" |

## Jobs-to-be-Done Framework

Structure prompts around JTBD:

```
"When [situation], I want to [motivation], so I can [outcome]"

→ "When a user lands on the dashboard Monday morning, they want to see 
   what needs attention first, so they can prioritize without clicking 
   around. Build a 'needs attention' widget showing: overdue tasks, 
   unread messages, approaching deadlines—sorted by urgency."
```

## Prioritization Lens

Before prompting, filter through:

1. **Impact**: How many users? How painful?
2. **Effort**: Agent hours, not human hours
3. **Risk**: What breaks if we're wrong?
4. **Learning**: What do we discover by building this?

## Rapid Prototyping Prompts

```
"Build a clickable prototype (React) of the new onboarding flow. 
Hardcode the data. Focus on interaction patterns, not backend. 
I need to test this with users tomorrow."
```

## Anti-Patterns

| PM Theater | Real PM Thinking |
|------------|------------------|
| "Add a dashboard" | "Help users answer: Am I on track today?" |
| "We need analytics" | "We need to know if users find value before day 7" |
| "Make it intuitive" | "New users complete core action in <2 minutes without help text" |

## Power Move

"Before building, generate 3 different approaches to solving [user problem]. For each, state: the assumption it tests, the simplest possible implementation, and how we'd know it worked."

The agent becomes a product thinking partner, not just a feature factory.
