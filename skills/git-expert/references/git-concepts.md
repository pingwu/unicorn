# Git Core Concepts

This document explains fundamental Git concepts that underpin its operation, helping you to understand version control at a deeper level.

## 1. The Three States of a File

In Git, files can be in one of three main states:

*   **Working Directory (Modified):** The files you are currently editing. These changes are not yet staged or committed.
*   **Staging Area (Staged/Index):** A temporary area where you prepare changes before committing them. Think of it as a "pre-commit" area where you select what changes will be part of the next snapshot.
*   **Git Directory (Committed):** The directory where Git stores all the metadata and object database for your repository. Once changes are committed, they are safely stored in the Git history.

## 2. Git Objects

Git is essentially a content-addressable filesystem. It stores its data as a series of objects:

*   **Blob:** Stores file content. Each version of a file is stored as a blob. Identified by the SHA-1 hash of its content.
*   **Tree:** Represents a directory. It contains pointers to blobs (for files) and other trees (for subdirectories).
*   **Commit:** Points to a tree object (the snapshot of the working directory at the time of the commit), its parent commit(s), author/committer information, and a commit message.
*   **Tag:** A permanent, human-readable name for a specific commit (e.g., `v1.0`).

## 3. Pointers and References (Refs)

Refs are simply pointers to commits. They are human-readable names for SHA-1 hashes.

*   **Branches:** A lightweight, movable pointer to a commit. When you commit, the branch pointer automatically moves forward to the new commit. `main` or `master` are common branch names.
*   **HEAD:** A special pointer that indicates the *current* snapshot you are working on. It usually points to the tip of the current branch.
    *   **Detached HEAD:** Occurs when HEAD points directly to a commit, not a branch. This state means any new commits you make won't be associated with a branch, making them "lost" unless you create a new branch from that point.

## 4. The `origin` Remote

`origin` is the conventional name for the remote repository that a project was originally cloned from. It's a shorthand for the URL of the remote repository on GitHub (or GitLab, Bitbucket, etc.).

*   `git remote add origin <URL>`: Adds a new remote named `origin`.
*   `git push origin main`: Pushes the `main` branch to the `origin` remote.

## 5. Fast-Forward Merge vs. Three-Way Merge

When merging branches, Git uses different strategies:

*   **Fast-Forward Merge:** Occurs when the target branch (e.g., `main`) has not diverged from the feature branch. Git simply moves the pointer of the target branch to the latest commit of the feature branch. No new merge commit is created.
*   **Three-Way Merge:** Occurs when the target branch *has* diverged from the point where the feature branch was created. Git needs a common ancestor and the tips of both branches to create a new "merge commit" that integrates the changes from both lines of development.

## 6. Git Index (Staging Area)

The index (or staging area) is a crucial intermediate step between the working directory and the Git directory. It allows you to craft commits precisely, selecting only the changes you want to include in the next snapshot.

*   `git add <file>`: Copies the current version of the file from the working directory into the staging area.
*   `git commit`: Takes the snapshot from the staging area and permanently stores it in the Git directory.
