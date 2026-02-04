# GitHub CLI (gh) Commands

This document provides a quick reference for common commands using the official GitHub CLI tool (`gh`). The `gh` CLI simplifies interaction with GitHub from your terminal.

**Prerequisite:** The GitHub CLI (`gh`) must be installed on your system.

## 1. Authentication

Log in to GitHub. This will open a browser for authentication.

```bash
gh auth login
```

## 2. Repository Management

### Create a new repository
```bash
gh repo create <repository_name> --public --source=. --remote=upstream
```
This command creates a new public repository and pushes your local project to it.

### Clone a repository
```bash
gh repo clone <owner/repo>
```
Example: `gh repo clone cli/cli`

### View repository details
```bash
gh repo view <owner/repo>
```

## 3. Pull Request (PR) Management

### Create a new pull request
```bash
gh pr create --title "My amazing feature" --body "Details of my feature"
```
This will open a browser to finalize the PR or create it directly from CLI.

### List pull requests
```bash
gh pr list
```

### View a specific pull request
```bash
gh pr view <pr_number_or_branch>
```

### Checkout a pull request locally
```bash
gh pr checkout <pr_number_or_branch>
```

### Review a pull request
```bash
gh pr review <pr_number_or_branch> --approve --body "Looks good!"
```

### Merge a pull request
```bash
gh pr merge <pr_number_or_branch> --squash
```

## 4. Issue Management

### Create a new issue
```bash
gh issue create --title "Bug: Login not working" --body "Steps to reproduce..."
```

### List issues
```bash
gh issue list
```

### View a specific issue
```bash
gh issue view <issue_number>
```

### Close an issue
```bash
gh issue close <issue_number>
```

## 5. Other Useful Commands

### View authenticated user
```bash
gh auth status
```

### Upgrade gh CLI
```bash
gh upgrade
```

## More Information

For a complete list of commands and options, refer to the official GitHub CLI documentation:
[GitHub CLI Manual](https://cli.github.com/manual/)
