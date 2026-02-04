# Git Workflows for GitHub

This document provides common Git workflows and commands for interacting with GitHub.

## 1. Cloning a Repository

To get a copy of a repository from GitHub to your local machine:

```bash
git clone <repository_url>
```

Example: `git clone https://github.com/octocat/Spoon-Knife.git`

## 2. Basic Commit Workflow

1.  **Check status:** See which files have been modified or are untracked.
    ```bash
    git status
    ```
2.  **Stage changes:** Add modified files to the staging area.
    ```bash
    git add <file_name>
    git add . # to stage all changes
    ```
3.  **Commit changes:** Record the staged changes to your local repository history.
    ```bash
    git commit -m "Your descriptive commit message"
    ```

## 3. Pushing Changes to GitHub

To upload your local commits to the remote repository on GitHub:

```bash
git push origin <branch_name>
```

For the first push of a new branch:
```bash
git push -u origin <branch_name>
```
Example: `git push origin main`

## 4. Pulling Changes from GitHub

To download and integrate changes from the remote repository to your local branch:

```bash
git pull origin <branch_name>
```
Example: `git pull origin main`

## 5. Branch Management

### Create a new branch
```bash
git checkout -b <new_branch_name>
```
Example: `git checkout -b feature/my-new-feature`

### Switch to an existing branch
```bash
git checkout <existing_branch_name>
```
Example: `git checkout main`

### List branches
```bash
git branch # lists local branches
git branch -a # lists all (local and remote-tracking) branches
```

### Delete a local branch
```bash
git branch -d <branch_name> # safe delete, only if merged
git branch -D <branch_name> # force delete
```

### Delete a remote branch
```bash
git push origin --delete <branch_name>
```

## 6. Merging Branches

To integrate changes from one branch into another (e.g., `feature` into `main`):

1.  Switch to the target branch: `git checkout main`
2.  Merge the source branch: `git merge feature/my-new-feature`

## 7. Handling Conflicts

If `git merge` or `git pull` results in conflicts:
*   Git will indicate conflicting files.
*   Manually edit the files to resolve conflicts (look for `<<<<<<<`, `=======`, `>>>>>>>`).
*   Stage the resolved files: `git add <resolved_file_name>`
*   Commit the merge: `git commit -m "Merge branch 'feature/my-new-feature' into main"`
