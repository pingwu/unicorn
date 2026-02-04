---
name: git-expert
description: Provides expert guidance on advanced Git concepts, commands, and best practices. Use for complex version control scenarios, Git internals, recovery from mistakes, and optimizing Git workflows.
---

# Git Expert

This skill offers in-depth knowledge and practical advice for navigating complex Git scenarios, understanding Git's underlying mechanics, and effectively recovering from common version control challenges.

## Core Principle

"Master Git to master your codebase. Understand the 'why' behind the 'what' to wield version control with confidence."

## When to Use This Skill

Use this skill when you need to:
*   Perform advanced Git operations like rebasing, cherry-picking, or bisecting.
*   Understand core Git concepts such as the staging area, HEAD, and different merge strategies.
*   Recover from Git mistakes (e.g., lost commits, accidental resets).
*   Optimize your Git workflow or troubleshoot complex repository states.
*   Clean up commit history or manage large files within Git.
*   Set up custom Git configurations or hooks.

## Key Concepts

*   **Three States of a File:** Working Directory, Staging Area (Index), Git Directory (Committed).
*   **Git Objects:** Blobs, Trees, Commits, Tags – how Git stores your data.
*   **Pointers and References (Refs):** Branches, HEAD, and how they navigate your commit history.
*   **Fast-Forward vs. Three-Way Merge:** Understanding different merge strategies.

## Workflows & Commands

This skill guides you through advanced Git scenarios. Refer to the bundled reference files for detailed explanations and command examples.

### 1. Advanced Git Commands

Explore powerful commands that go beyond basic commit, push, and pull:
*   `git rebase`: For linearizing history and integrating changes.
*   `git cherry-pick`: To apply specific commits across branches.
*   `git reflog`: Your safety net for recovering lost work.
*   `git bisect`: For efficiently finding the commit that introduced a bug.
*   `git filter-repo`: For rewriting repository history (e.g., removing large files).
*   Git Hooks: Custom scripts to automate actions at specific points in the Git workflow.

**Reference:** See [ADVANCED-GIT-COMMANDS.md](references/advanced-git-commands.md) for detailed usage.

### 2. Git Core Concepts

Gain a deeper understanding of how Git works internally:
*   The three states of a file and their implications.
*   How Git stores data as objects.
*   The role of pointers like HEAD and branches.
*   The `origin` remote and how it connects your local repo to GitHub.
*   Detailed breakdown of merge strategies.

**Reference:** See [GIT-CONCEPTS.md](references/git-concepts.md) for conceptual explanations.

### 3. Git Recovery: Undoing Mistakes

Learn how to safely undo changes and recover from common Git blunders:
*   Discarding changes in the working directory or staging area.
*   Amending the last commit.
*   Undoing (resetting) commits locally.
*   Reverting commits (creating new commits to undo previous ones, safe for shared history).
*   Using `git reflog` as a powerful recovery tool.
*   Stashing changes when switching contexts.

**Reference:** See [GIT-RECOVERY.md](references/git-recovery.md) for step-by-step recovery procedures.

## Power Move

"Before making any potentially destructive changes (like `git reset --hard` or `git rebase`), always perform a `git reflog` and save its output. This provides a safety net for almost any recovery scenario."

## Troubleshooting

*   **"Detached HEAD" state:** Understand that HEAD is pointing directly to a commit, not a branch. Create a new branch if you want to make new commits from this point.
*   **Merge Conflicts:** Refer to `git-workflows.md` for basic resolution, and advanced techniques might involve `git mergetool`.
*   **"Rewriting history" warnings:** Remember that operations like `rebase` and `amend` change commit hashes. Avoid these on shared branches unless absolutely necessary and coordinated with your team.