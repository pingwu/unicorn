# Advanced Git Commands

This document provides explanations and usage examples for advanced Git commands.

## 1. git rebase

Rebasing is the process of moving or combining a sequence of commits to a new base commit. It's often used to keep a linear project history.

### When to use:
*   To integrate changes from one branch into another, especially before merging into a shared branch (e.g., `main`).
*   To clean up your local commit history before pushing to a remote.
*   To squash multiple small commits into one logical commit.

### Basic usage:
```bash
git checkout <feature_branch>
git rebase main # Rebase feature_branch onto main
```

### Interactive rebase (`-i`):
Used to rewrite commit history (squash, reorder, edit, delete commits).
```bash
git rebase -i HEAD~<number_of_commits> # e.g., git rebase -i HEAD~3
```
This opens an editor where you can specify actions for each commit.

**Caution:** Never rebase commits that have already been pushed to a shared remote repository, as it rewrites history and can cause conflicts for collaborators.

## 2. git cherry-pick

Cherry-picking is the act of picking a commit from one branch and applying it onto another branch.

### When to use:
*   To apply a specific bug fix or feature from one branch to another without merging the entire branch.
*   To apply a commit to a different branch that it wasn't originally intended for.

### Usage:
```bash
git checkout <target_branch>
git cherry-pick <commit_hash>
```
Example: `git cherry-pick a1b2c3d4`

## 3. git reflog

The reflog (reference log) records updates to the tips of branches and other references in the local repository. It's a powerful tool for recovering lost work.

### When to use:
*   To find lost commits that seem to have disappeared (e.g., after a hard reset or rebase gone wrong).
*   To understand what Git operations have been performed recently.

### Usage:
```bash
git reflog # Shows a history of HEAD's movement
git reflog show <branch_name>
```
Once you find the commit you want to recover, you can use `git cherry-pick` or `git reset --hard <commit_hash>`.

## 4. git bisect

Git bisect is a debugging tool that helps find the commit that introduced a bug by performing a binary search through the commit history.

### Usage:
```bash
git bisect start
git bisect bad # Mark the current commit as bad (bug is present)
git bisect good <known_good_commit> # Mark a known good commit
```
Git will then checkout a commit in the middle. You test it and mark it `git bisect good` or `git bisect bad`. Repeat until the culprit commit is found.

```bash
git bisect reset # To end the bisect session
```

## 5. git filter-repo (or git filter-branch)

Used for rewriting a repository's history, such as removing large files, changing author info, or making global changes. `git filter-repo` is generally preferred over `git filter-branch` due to speed and safety.

### When to use:
*   To remove sensitive data or large files that were accidentally committed.
*   To move a sub-directory into a new root directory for a new repository.

### Usage (example with git filter-repo - install it first):
```bash
# To remove a large file from all history
git filter-repo --path large_file.zip --invert-paths --force
```

**Caution:** Rewriting history is a destructive operation. Only do this on a fresh clone if you intend to push to a remote, and inform all collaborators as they will need to re-clone the repository.

## 6. Git Hooks

Git hooks are scripts that Git executes before or after events such as commit, push, and receive.

### Common hooks:
*   `pre-commit`: Run before a commit is finalized (e.g., to lint code, run tests).
*   `pre-push`: Run before pushing commits (e.g., to run integration tests).
*   `post-receive`: Run on the remote repository after a successful push.

### Usage:
Hooks are located in the `.git/hooks/` directory of your repository. You can enable them by removing the `.sample` extension or by writing new scripts.

Example `pre-commit` script (bash):
```bash
#!/bin/sh
# Check for large files
find . -size +10M -print -exec false {} +
```
This script would prevent committing files larger than 10MB.
