# Git Recovery: Undoing Mistakes

This document provides guidance on how to recover from common Git mistakes. Git is powerful, and almost anything can be undone if you know how.

## 1. Undoing Changes in the Working Directory

### Discard changes in a specific file
If you've modified a file but haven't staged it yet, and you want to discard those changes:
```bash
git restore <file_name>
# or for older Git versions
git checkout -- <file_name>
```

### Discard all changes in the working directory
To discard all unstaged changes in your entire repository:
```bash
git restore .
# or for older Git versions
git checkout -- .
```

## 2. Undoing Changes in the Staging Area (Unstaging)

If you've used `git add` to stage a file, but you want to unstage it before committing:
```bash
git restore --staged <file_name>
# or for older Git versions
git reset HEAD <file_name>
```
This moves the file from the staging area back to the working directory (modified state).

## 3. Amending the Last Commit

If you just committed and realized you forgot to add a file, or made a typo in the commit message:

1.  **Add forgotten files:**
    ```bash
    git add <forgotten_file>
    ```
2.  **Amend the commit:**
    ```bash
    git commit --amend --no-edit # to keep the same commit message
    # or
    git commit --amend # to edit the commit message
    ```
**Caution:** Do not amend commits that have already been pushed to a shared remote repository, as this rewrites history.

## 4. Undoing the Last Commit (Before Pushing)

If you want to completely undo the last commit and move the changes back to your working directory (unstaged):
```bash
git reset HEAD~1
```
This is a "soft" reset. The changes from the undone commit are still in your working directory and staging area.

To undo the last commit and discard all changes from it (move them to working directory, unstaged):
```bash
git reset HEAD^
```

## 5. Permanently Removing the Last Commit (Local Only)

If you want to completely remove the last commit and discard its changes from both the staging area and working directory:
```bash
git reset --hard HEAD~1
```
**Caution:** This is a destructive operation. Make sure you don't need the changes.

## 6. Reverting a Commit (After Pushing)

If you need to undo a commit that has already been pushed to a remote repository, you should use `git revert`. This creates a *new* commit that undoes the changes of a previous commit, preserving the project history.

### Revert the last commit
```bash
git revert HEAD
```

### Revert a specific commit
```bash
git revert <commit_hash>
```
This will open an editor for you to write the revert commit message.

## 7. Recovering Lost Commits with `git reflog`

If you accidentally `git reset --hard` or rebased incorrectly, `git reflog` is your best friend. It shows a history of where HEAD has been.

1.  **View reflog:**
    ```bash
    git reflog
    ```
    You'll see a list like: `a1b2c3d HEAD@{0}: commit: message`
2.  **Find the commit you want to recover:** Identify the `commit_hash` from the reflog.
3.  **Recover:**
    ```bash
    git cherry-pick <commit_hash> # To apply it as a new commit
    # or
    git reset --hard <commit_hash> # To reset your branch to that state (destructive)
    ```

## 8. Stashing Changes

If you need to switch branches but have uncommitted changes you don't want to commit yet, you can stash them.

### Stash changes
```bash
git stash save "My message"
```

### View stashes
```bash
git stash list
```

### Apply a stash
```bash
git stash apply # applies the latest stash
git stash apply stash@{1} # applies a specific stash
```

### Apply and drop a stash
```bash
git stash pop
```

### Drop a stash
```bash
git stash drop # drops the latest stash
```
