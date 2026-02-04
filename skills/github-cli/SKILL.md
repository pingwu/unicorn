---
name: github-cli
description: Assists with GitHub command-line operations, including repository management, branch workflows, pull requests, and issues. Provides guidance for both Git commands and the GitHub CLI (gh) tool. Use this skill when interacting with GitHub repositories, managing code, or automating GitHub-related tasks.
---

# GitHub CLI Expert

This skill provides comprehensive guidance for interacting with GitHub from the command line, covering both standard Git commands and the enhanced capabilities of the official GitHub CLI (`gh`).

## Core Principle

"Efficient GitHub interaction from your terminal, reducing context switching and streamlining development workflows."

## When to Use This Skill

Use this skill when you need to:
*   Perform any operation related to GitHub repositories (cloning, pushing, pulling).
*   Manage Git branches and their remote counterparts.
*   Create, review, or merge Pull Requests.
*   Create, list, or manage Issues.
*   Automate any GitHub-related tasks.
*   Get instructions on using the `gh` CLI tool.

## Key Concepts

*   **Git Commands:** Fundamental version control operations that interact with any Git repository, including those hosted on GitHub.
*   **GitHub CLI (`gh`):** An official command-line tool that extends Git's functionality with GitHub-specific features, making common tasks faster and more integrated.

## Workflows & Commands

This skill guides you through common GitHub workflows. Refer to the bundled reference files for detailed command examples.

### 1. Git Workflows for GitHub

For standard Git operations when working with GitHub, including:
*   Cloning repositories.
*   Basic commit workflow (status, add, commit).
*   Pushing and pulling changes to/from GitHub.
*   Branch management (create, switch, list, delete).
*   Merging branches and handling conflicts.

**Reference:** See [GIT-WORKFLOWS.md](references/git-workflows.md) for detailed commands and examples.

### 2. GitHub CLI (`gh`) Commands

For streamlined GitHub-specific operations using the `gh` tool, including:
*   Authentication with GitHub.
*   Repository management (create, clone, view).
*   Pull Request management (create, list, view, checkout, review, merge).
*   Issue management (create, list, view, close).

**Prerequisite:** The `gh` CLI tool must be installed on your system for these commands to work. You can usually install it via your system's package manager (e.g., `brew install gh` on macOS, `sudo apt install gh` on Debian/Ubuntu).

**Reference:** See [GH-CLI-COMMANDS.md](references/gh-cli-commands.md) for detailed commands and examples.

## Power Move

"Combine `gh` CLI with Git aliases and shell scripting to automate complex GitHub workflows, such as automatically creating a feature branch, pushing it, opening a draft PR, and linking it to an issue, all with one custom command."

## Troubleshooting

*   **"git" command not found:** Ensure Git is installed and in your system's PATH.
*   **"gh" command not found:** Ensure GitHub CLI is installed.
*   **Authentication issues:** Run `gh auth login` or check your Git credentials.
*   **Permissions errors:** Verify your GitHub token/SSH key has the necessary permissions for the operation.